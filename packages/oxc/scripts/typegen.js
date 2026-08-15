import { IndentationText, Project, ts } from 'ts-morph'

const project = new Project({
  tsConfigFilePath: 'jsconfig.json',
  skipAddingFilesFromTsConfig: true,
  manipulationSettings: {
    indentationText: IndentationText.TwoSpaces,
  },
})

const sourceFile = project.addSourceFileAtPath('src/configs/index.js')
const dtsFile = project.addSourceFileAtPath('src/configs/index.d.ts')
const variable = sourceFile.getVariableDeclarationOrThrow('CONFIGS')

const importSpecifiers = /** @type {Map<string, string>} */ (new Map())
for (const declaration of sourceFile.getImportDeclarations()) {
  const name = declaration.getDefaultImport()?.getText()
  if (name !== undefined) {
    importSpecifiers.set(name, declaration.getModuleSpecifierValue())
  }
}

function getConfigLiteral(/** @type {string} */ importedName) {
  const moduleSpecifier = importSpecifiers.get(importedName)
  if (moduleSpecifier === undefined) {
    return {}
  }
  const file = project.addSourceFileAtPath(`src/configs/${moduleSpecifier.replace(/^\.\//, '')}`)
  const literal = file
    .getDescendants()
    .map(node => node.asKind(ts.SyntaxKind.ObjectLiteralExpression))
    .find(node => node?.getProperty('name') !== undefined)
  if (!literal) {
    return {}
  }
  return {
    enable: literal.getProperty('enable')
      ?.asKind(ts.SyntaxKind.PropertyAssignment)
      ?.getInitializer()
      ?.getText(),
    options: literal.getProperty('options')
      ?.asKind(ts.SyntaxKind.PropertyAssignment)
      ?.getInitializer()
      ?.getText(),
  }
}

dtsFile.getInterface('Options')?.remove()

dtsFile.addInterface({
  name: 'Options',
  isExported: true,
  properties: variable
    .getType()
    .getArrayElementTypeOrThrow()
    .getUnionTypes()
    .map((node) => {
      const name = node.getPropertyOrThrow('name')
        .getTypeAtLocation(variable)
        .getText()
        .replaceAll(/^"|"$/g, '')
      const options = node.getProperty('options')
        ?.getTypeAtLocation(variable)
        .getConstraint()
      const { enable, options: defaultOptions } = getConfigLiteral(name)
      let defaultText = 'auto'
      if (enable === undefined) {
        defaultText = 'true'
      } else if (enable === 'true' || enable === 'false') {
        defaultText = enable
      }
      const tags = [
        { tagName: 'default', text: defaultText },
      ]
      if (defaultOptions !== undefined) {
        tags.push({ tagName: 'options', text: defaultOptions })
      }
      return {
        name,
        type: options ? `boolean | ${options.getText()}` : 'boolean',
        hasQuestionToken: true,
        docs: [{
          description: `\`${name}\` option`,
          tags,
        }],
      }
    }),
})

dtsFile.saveSync()
