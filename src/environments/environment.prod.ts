export const environment = {
    production: 'true',
    api: {
      root: 'http://gateway.marvel.com/',
    registerRoot: 'http://localhost:3000/'
    },
    endpoint: {
      characters: '/characters',
      users: '/characters/:characterId/series',
      register: 'users',
      login: 'login'
    }
}
