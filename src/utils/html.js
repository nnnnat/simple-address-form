export default function(app) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <title>Some Website</title>
      </head>
      <body>
        <div id="root">${app}</div>
        <script src="public/vendor.js"></script>
        <script src="public/client.js"></script>
      </body>
    </html>
  `;
}
