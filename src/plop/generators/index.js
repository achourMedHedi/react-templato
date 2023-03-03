/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

import componentGenerator from "./component/index.js";
// import reduxGenerator from "./redux/index.js";

export default (plop) => {
  // page its like generate new route
  // add page, test, new line in router page, types.ts, i18n - page title

  // feature ( redux )
  // constants, actions, reducer, selector

  plop.setGenerator("component", componentGenerator);
  // plop.setGenerator("redux", reduxGenerator);
  // types.ts, test, storybook, i18n,
};

// module.exports.BACKUPFILE_EXTENSION = BACKUPFILE_EXTENSION;
