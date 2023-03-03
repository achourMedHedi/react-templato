export default {
    description: "Add new redux ( reducer )",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "reducer name?",
        default: "Button",
        validate: (value) => {
          if (value) {
            return true;
          }
          return "The name is required";
        },
      },
      {
        type: "confirm",
        name: "wantMessages",
        default: true,
        message: "Do you want i18n messages (i.e. will this component use text)?",
      },
    ],
    actions: data => {
        return [
            {
                type: 'add',
                path: '../../components/{{properCase name}}/index.tsx',
                templateFile: './component/index.tsx.hbs',
                abortOnFail: true
            }
        ]
    }
  };