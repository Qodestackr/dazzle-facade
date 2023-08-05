/**
 "scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "storybook": "storybook dev -p 6006",
  "build-storybook": "storybook build",
  "test": "jest",
  "check-chalk": "node -e 'require(\"./scripts/utils/checkDependencies\").checkDependencies([\"chalk\"])'",
  "dev-storybook": "npm run check-chalk && npm run storybook",
  "build-storybook": "npm run check-chalk && npm run build-storybook",
  "dev-test": "npm run check-chalk && npm run test",
  "lint-fix": "npm run check-chalk && eslint . --ext ts,tsx --fix",
//  BELOW
  "analyze": "npm run check-chalk && vite analyze",
  "cypress-open": "npm run check-chalk && npm run cypress:open"
},
 */
//  "format": "npm run check-chalk && prettier --write \"**/*.ts\" \"**/*.tsx\"",
