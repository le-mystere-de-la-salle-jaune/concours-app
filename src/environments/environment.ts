// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const backEndUrl = "http://localhost:8080"

export const environment = {
  production: false,

  backEndUrl,
  stagiaireApiUrl: `${backEndUrl}/api/stagiaires`,
  concoursApiUrl: `${backEndUrl}/api/concours`,
  commencerConcoursUrl: `${backEndUrl}/api/passage_concours/start`,
  afficherResultatUrl: `${backEndUrl}/api/passage_concours/resultat`,
  questionApiUrl: `${backEndUrl}/api/questions`

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
