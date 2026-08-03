import { IndentationText, Project } from 'ts-morph'

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

dtsFile.getInterface('Options')?.remove()

dtsFile.addInterface({
  name: 'Options',
  properties: variable
    .getType()
    .getArrayElementTypeOrThrow()
    .getUnionTypes()
    .map((node) => {
      const name = node.getPropertyOrThrow('name')
        .getTypeAtLocation(variable)
        .getText()
      const options = node.getProperty('options')
        ?.getTypeAtLocation(variable)
        .getConstraint()
      return {
        name: name.replaceAll(/^"|"$/g, ''),
        type: options ? `boolean | ${options.getText()}` : 'boolean',
        hasQuestionToken: true,
      }
    }),
})

dtsFile.saveSync()
