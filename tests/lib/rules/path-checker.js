const rule = require("../../../lib/rules/path-checker"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {ecmaVersion: 6, sourceType: 'module'}
});
ruleTester.run("path-checker", rule, {
  valid: [
    {
      filename: "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\entities\\Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'",
      errors: [{ message: "В рамках одного слайса импорты должны быть относительными" }],
    },
  ],

  invalid: [
    {
      filename: "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\entities\\Article\\model\\test.ts",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/model/slices/addCommentFormSlice'",
      errors: [{ message: "В рамках одного слайса импорты должны быть относительными" }],
      output: "import { addCommentFormActions, addCommentFormReducer } from './slices/addCommentFormSlice'",
      options: [
        {
          alias: '@'
        }
      ]
    },
    {
      filename: "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\entities\\Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from 'entities/Article/model/slices/addCommentFormSlice'",
      errors: [{ message: "В рамках одного слайса импорты должны быть относительными" }],
      output: "import { addCommentFormActions, addCommentFormReducer } from './Article/model/slices/addCommentFormSlice'",
    },
  ],
});
