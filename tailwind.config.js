module.exports = {
    mode: 'jit',
    purge: [
      '{layouts,pages,components}/**/*.{js,ts,tsx, jsx}'
    ],
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: ["garden"],
    }
  }