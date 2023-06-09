# Education App
The website is accessible on: https://education-course-platform.vercel.app/


## BEFORE START
Install extension that disables CORS Policy in your browser. 
The API server blocks all requests from non-wisey domain.

Chrome: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf

### NOTES:
- When loading the page with the list of courses, two 404 errors occur (loading a video that does not exist). Since the loading is performed by the `hls.js` library, the error handler (`error.service`) I created is not able to handle these requests.
- This code needs refactoring due to lack of time for developing :)

## Run Project

Before you can run this app, you need to fetch token
`https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions`
and set value to `token` variable in `envinronment/environment.ts` file

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Services

`progress.service` handles the progress (time and active lesson) of each opened course, which uses `local.service`

`local.service` - handles localStorage saving and getting data
