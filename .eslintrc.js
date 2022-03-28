module.exports = {
  env: {
    // 브라우저 환경 체크
    browser: true,
    // nodejs 환경 체크
    node: true
  },
  // 코드 검사를 할 기본적인 규칙
  extends: [
    // vue: 아래로 내려갈 수록 강한 규칙
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    // js: eslint에서 권장하는 것
    'eslint:recommended'
  ],
  parserOptions: {
    // 구문분석을 해서 es5 지원 가능하게
    parser: 'babel-eslint'
  },
  rules: {
    // 기본 규칙을 변경하기 위해 사용
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
};
