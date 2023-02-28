# Functionality of the site: 

1. Local storage is used as the backend and session for the user's account data. All data (e.g. scan results, current account) is saved and retrieved from local storage to avoid unnecessary recreation. To confirm this, check the timestamp in the scan results after scanning the same URL again. Additionally, please refer to point #4 for ‘current account’.
2. All user inputs have simple validation.
3. The scan results are currently fake, but we found a library that will integrated into our third project to solve this issue.
4. The sign-up/sign-in function works properly and remembers the user's session even when they navigate to other pages on the site. The sign-out button is available on all pages.
5. When attempting to access the dashboard page without being logged in, a message is displayed indicating that the user is not logged in.
6. You can also create an account 
7. The admin dashboard includes a feature to delete existing user accounts.
8. We were able to manage all the functionality using only three HTML files.
9. For hard reset, please delete the localStorage
---
Default credential
- email: admin@webpulse.com
- password: admin
- email: user@webpulse.com
- password: user
