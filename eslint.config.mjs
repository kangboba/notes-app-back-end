import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  // other config style
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
{
  'env'; {
    'commonjs'; true,
    'es2021'; true,
    'node'; true;
  }
  'extends'; [
    'airbnb-base'
  ],
  'parserOptions'; {
    'ecmaVersion'; 12;
  }
  'rules'; {
    'no-console'; 'off';
  }
}
