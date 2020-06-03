module.exports = function (plop) {
  plop.setGenerator('test', {
    description: 'generate a test',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入文件名称',
      }
    ],
    actions: data => {
      const name = '{{name}}'
      var c = data.name.charAt(0)
      const actions = [
        {
          type: 'add',
          path: `src/${(c < 'A' || c > 'Z') ? 'page' : 'components'}/${name}/index.vue`,
          templateFile: 'plop-templates/index.hbs',
          data: {
            name: name
          }
        }
      ]
      return actions
    }
  })
}

