const backEndUrl = "https://concours-web-admin.herokuapp.com"

export const environment = {
  production: true,
  
  backEndUrl,
  stagiaireApiUrl: `${backEndUrl}/api/stagiaires`,
  concoursApiUrl: `${backEndUrl}/api/concours`,
  commencerConcoursUrl: `${backEndUrl}/api/passage_concours/start`
};
