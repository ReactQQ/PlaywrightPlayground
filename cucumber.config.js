module.exports = {
  require: [
    '@cucumber/cucumber',
    'ts-node/register',
    'src/step_definitions',
    // 'src/step_definitions/*.ts',
    // 'src/step_definitions/navigation.ts'
  ],
  glue: 'src/step_definitions'
}