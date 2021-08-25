interface TemplateParams {
  cssPath: string;
  jsPath: string;
  content: string;
}

export default function renderTemplate({
  cssPath,
  jsPath,
  content = '',
}: TemplateParams): string {
  return `<!DOCTYPE html>
  <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="/client/${cssPath}"/>
    
        <title>React SSR</title>
      </head>
      <body>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">${content}</div>

        <script src="/client/${jsPath}"></script>
      </body>
  </html>`;
}
