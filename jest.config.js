module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  moduleDirectories: ['node_modules', 'src'],
};
