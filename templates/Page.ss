<!doctype html>
<html class="no-js" lang="$ContentLocale">
    <head>
        <% base_tag %>
        <title><% if $MetaTitle %>$MetaTitle.XML<% else %>$Title.XML<% end_if %> | $SiteConfig.Title.XML</title>
        $MetaTags(false)
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <% if $RSSLink %>
        <link rel='alternate' type='application/rss+xml' title='RSS' href='$RSSLink'>
        <% end_if %>
        <% require themedCss('dist/css/bootstrap4.css') %>
        <% require themedCss('dist/css/main.css') %>
        <% include Favicon %>
    </head>
    <body class="$ClassName">
        <header>
            <% include Header %>
            <% include MainNav %>
        </header>
        <main id="main" class="main">
            $Layout
        </main>
        <% include PageShowcase %>
        <footer class="footer-site">
            <% include Footer %>
        </footer>
        <% require javascript('//code.jquery.com/jquery-1.7.2.min.js') %>
            <% require themedJavascript('dist/dist/js/bootstrap4') %>
            <% require themedJavascript('dist/js/main.js') %>
        <% include GoogleAnalytics %>
    </body>
</html>
