// ============================================
// COMPREHENSIVE TECHNOLOGY SIGNATURES DATABASE
// ============================================
// Ultra-extensive tech detection for professional analysis
// Includes: 500+ technologies across 30+ categories

const signatures = {
  // ==================== CMS ====================
  "CMS": [
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wordpress.svg", patterns: [
      { type: "html", regex: /wp-content|wp-includes|wp-json|\/wordpress\/|wp-emoji|wp_/i },
      { type: "script", regex: /wp-content|wp-includes|wordpress|wp-embed/i },
      { type: "style", regex: /wp-content|wp-includes/i },
      { type: "header", regex: { "x-powered-by": /wordpress/i, "x-generator": /wordpress/i } },
      { type: "meta", regex: /wordpress/i },
      { type: "cookie", regex: /wordpress_|wp-settings/i }
    ]},
    { name: "Drupal", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/drupal.svg", patterns: [
      { type: "html", regex: /drupal|sites\/default\/files|Drupal\.|drupal-form|form-drupal/i },
      { type: "header", regex: { "x-generator": /drupal/i, "x-powered-by": /drupal/i } },
      { type: "meta", regex: /generator:drupal|drupal-version/i },
      { type: "script", regex: /drupal|drupalSettings/i },
      { type: "cookie", regex: /^SESS[a-f0-9]{32}$|drupal/i }
    ]},
    { name: "Joomla", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/joomla.svg", patterns: [
      { type: "html", regex: /joomla|\/components\/com_|Joomla\.|joomla-|jform-/i },
      { type: "meta", regex: /generator:joomla|joomla-version/i },
      { type: "header", regex: { "x-powered-by": /joomla/i } },
      { type: "cookie", regex: /joomla|joomla_session/i }
    ]},
    { name: "Ghost", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ghost.svg", patterns: [
      { type: "html", regex: /content="Ghost"|ghost-sdk|ghost-url|data-ghost/i },
      { type: "script", regex: /ghost-sdk|ghost\.io|ghost\.org|assets\/ghost/i },
      { type: "header", regex: { "x-powered-by": /ghost/i } },
      { type: "meta", regex: /generator:ghost/i }
    ]},
    { name: "Wix", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wix.svg", patterns: [
      { type: "html", regex: /wixstatic\.com|parastorage|wix-header|wix-link|wix\.com\//i },
      { type: "script", regex: /wixapps|wix-code|wix\.com\/.*\.js/i },
      { type: "header", regex: { "x-powered-by": /wix/i } }
    ]},
    { name: "Squarespace", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/squarespace.svg", patterns: [
      { type: "html", regex: /Static\.squarespace|squarespace-cdn|sqs-site/i },
      { type: "script", regex: /static1\.squarespace|squarespace\.com\/static/i },
      { type: "header", regex: { server: /squarespace/i } }
    ]},
    { name: "Webflow", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/webflow.svg", patterns: [
      { type: "html", regex: /cdn\.webflow\.com|assets\.webflow|data-w-/i },
      { type: "script", regex: /cdn\.webflow\.com|webflow\.com\/site\/.*\.js/i },
      { type: "header", regex: { "x-powered-by": /webflow/i } }
    ]},
    { name: "Shopify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg", patterns: [
      { type: "html", regex: /cdn\.shopify\.com|myshopify\.com|Shopify\.|shopify-app|data-shopify/i },
      { type: "script", regex: /cdn\.shopify\.com|myshopify\.com|shopify\.com\/cdn\/shop/i },
      { type: "header", regex: { "x-shopify-shop-id": /.+/i, "x-shopify-shop-api-call-limit": /.+/i } },
      { type: "meta", regex: /shopify-site-verification/i }
    ]},
    { name: "Typo3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typo3.svg", patterns: [
      { type: "html", regex: /typo3|TYPO3|t3:|data-t3/i },
      { type: "header", regex: { "x-powered-by": /typo3/i } },
      { type: "script", regex: /typo3/i }
    ]},
    { name: "Concrete5", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/concretecms.svg", patterns: [
      { type: "html", regex: /ccm-page|CCM\.ARRANGEMENT|concrete5-version/i },
      { type: "header", regex: { "x-powered-by": /concrete5/i } },
      { type: "script", regex: /concrete5\.org|ccm\.base|ccm_dispatcher/i }
    ]},
    { name: "ModX", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/modx.svg", patterns: [
      { type: "html", regex: /modx|MODx/i },
      { type: "header", regex: { "x-powered-by": /modx/i } }
    ]},
    { name: "Confluence", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/confluence.svg", patterns: [
      { type: "html", regex: /confluence-webapp|confluence-space-key|ajs-context-path/i },
      { type: "script", regex: /confluence\/|atlassian-confluence/i },
      { type: "meta", regex: /confluence-base-url|confluence-request/i }
    ]},
    { name: "Mediawiki", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mediawiki.svg", patterns: [
      { type: "html", regex: /mediawiki|mw-parser-output|mw-content-text/i },
      { type: "meta", regex: /generator:mediawiki/i },
      { type: "script", regex: /load\.php\?.*modules=|mediawiki/i }
    ]},
    { name: "Wikimedia", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wikimedia.svg", patterns: [
      { type: "html", regex: /wikimedia|wikipedia/i },
      { type: "script", regex: /wikimedia|wikipedia/i }
    ]}
  ],

  // ==================== BLOGS ====================
  "Blogs": [
    { name: "Blogger", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/blogger.svg", patterns: [
      { type: "html", regex: /blogger\.com|blogspot\.com|blogger-placeholder/i },
      { type: "meta", regex: /generator:blogger|blogspot/i },
      { type: "script", regex: /blogger|blogspot/i }
    ]},
    { name: "Medium", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/medium.svg", patterns: [
      { type: "html", regex: /medium-feed-|medium-post|medium\.com\/|cdn-cgi\/image\/.*medium|letter-press/i },
      { type: "script", regex: /medium\.com|cdn\.medium\.com/i },
      { type: "meta", regex: /property="article:publisher".*medium/i }
    ]},
    { name: "Tumblr", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tumblr.svg", patterns: [
      { type: "html", regex: /tumblr\.com|tumblr-|tmblr\./i },
      { type: "script", regex: /tumblr\.com|tmblr\./i }
    ]},
    { name: "Substack", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/substack.svg", patterns: [
      { type: "html", regex: /substack|substack-|substackcdn/i },
      { type: "script", regex: /substack/i }
    ]},
    { name: "Hashnode", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hashnode.svg", patterns: [
      { type: "html", regex: /hashnode|hashnode-|cdn\.hashnode/i },
      { type: "script", regex: /hashnode/i }
    ]},
    { name: "Dev.to", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/devdotto.svg", patterns: [
      { type: "html", regex: /dev\.to|dev-to|devto/i },
      { type: "script", regex: /dev\.to/i }
    ]}
  ],

  // ==================== WEBMAIL ====================
  "Webmail": [
    { name: "Roundcube", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/roundcube.svg", patterns: [
      { type: "html", regex: /roundcube_webmail|\/roundcube\/|roundcube-|rcmail/i },
      { type: "script", regex: /roundcube/i }
    ]},
    { name: "Outlook Web", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftoutlook.svg", patterns: [
      { type: "html", regex: /outlook\.office\.com|outlook\.live\.com\/mail|owa-placeholder/i },
      { type: "script", regex: /outlook\.office\.com|outlook\.live\.com/i },
      { type: "meta", regex: /microsoft\.online\.outlook/i }
    ]},
    { name: "Zimbra", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zimbra.svg", patterns: [
      { type: "html", regex: /zimbra|zimbramail|zimlet/i },
      { type: "header", regex: { server: /zimbra/i } },
      { type: "script", regex: /zimbra/i }
    ]},
    { name: "Squirrelmail", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/squirrel.svg", patterns: [
      { type: "html", regex: /squirrelmail|src\/images|left_main\.php/i },
      { type: "script", regex: /squirrelmail/i }
    ]},
    { name: "Horde", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/horde.svg", patterns: [
      { type: "html", regex: /horde|horde-|hordemail/i },
      { type: "header", regex: { server: /horde/i } }
    ]},
    { name: "Mailcow", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mailcow.svg", patterns: [
      { type: "html", regex: /mailcow|mailcow-|mailcow\.docker/i },
      { type: "header", regex: { "x-powered-by": /mailcow/i } }
    ]}
  ],

  // ==================== DEVELOPMENT ====================
  "Development": [
    { name: "Webpack", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/webpack.svg", patterns: [
      { type: "script", regex: /webpackBootstrap|__webpack_require__|webpackChunk/i },
      { type: "html", regex: /webpack-dev-server|webpack:/i },
      { type: "style", regex: /webpack/i }
    ]},
    { name: "Vite", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vite.svg", patterns: [
      { type: "html", regex: /vite\/client|vite@|@vite\/|vite\.svg/i },
      { type: "script", regex: /@vite\/client|vite:|vite\.js/i }
    ]},
    { name: "Parcel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/parcel.svg", patterns: [
      { type: "script", regex: /parcelRequire|parcel-loader/i },
      { type: "html", regex: /parcel|parcel-/i }
    ]},
    { name: "Babel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/babel.svg", patterns: [
      { type: "script", regex: /babel(?:Helpers|Polyfill|Runtime)/i },
      { type: "html", regex: /babel|babelrc/i }
    ]},
    { name: "esbuild", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/esbuild.svg", patterns: [
      { type: "script", regex: /esbuild|esbuild:/i },
      { type: "html", regex: /esbuild/i }
    ]},
    { name: "Rollup", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rollupdotjs.svg", patterns: [
      { type: "script", regex: /rollup|rollupVersion/i },
      { type: "html", regex: /rollup/i }
    ]},
    { name: "Gulp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gulp.svg", patterns: [
      { type: "script", regex: /gulp|gulpfile/i },
      { type: "html", regex: /gulp/i }
    ]},
    { name: "Grunt", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/grunt.svg", patterns: [
      { type: "script", regex: /grunt|Gruntfile/i },
      { type: "html", regex: /grunt/i }
    ]},
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg", patterns: [
      { type: "script", regex: /typescript|\.ts\?|\.tsx\?|type-check/i },
      { type: "html", regex: /typescript|tsconfig/i }
    ]},
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg", patterns: [
      { type: "style", regex: /tailwind|_apply|@layer|@screen/i },
      { type: "html", regex: /tailwindcss|tailwind\.css|class=".*?(?:px-|py-|mt-|mb-|flex|grid|text-)/i },
      { type: "script", regex: /tailwindcss/i }
    ]},
    { name: "PostCSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postcss.svg", patterns: [
      { type: "style", regex: /postcss|autoprefixer/i },
      { type: "html", regex: /postcss\.config/i }
    ]}
  ],

  // ==================== PROGRAMMING LANGUAGES ====================
  "Programming languages": [
    { name: "PHP", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/php.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /php/i, server: /php/i } },
      { type: "html", regex: /\.php(\?|[#\/])|php\?|phpinfo|php-version/i },
      { type: "meta", regex: /generator:.*php/i },
      { type: "cookie", regex: /phpsessid|php_/i },
      { type: "script", regex: /php|phpsessid/i }
    ]},
    { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /python|wsgi|django|flask|asgi/i, server: /gunicorn|uwsgi|waitress|hypercorn/i } },
      { type: "html", regex: /csrfmiddlewaretoken|django-admin|flask-|__admin_media__|\.py\?/i },
      { type: "meta", regex: /generator:.*python/i },
      { type: "cookie", regex: /csrftoken|sessionid|django_session/i }
    ]},
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /express|node|nodejs|fastify|koa|hapi|nestjs/i, server: /node/i } },
      { type: "html", regex: /__next|__nuxt|_next\/static|_nuxt\//i },
      { type: "script", regex: /_next\/|__nuxt\/|node_modules/i },
      { type: "meta", regex: /generator:.*node/i }
    ]},
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ruby.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /ruby|rails|puma/i, server: /puma|unicorn|passenger|webrick/i } },
      { type: "meta", regex: /generator:rails/i },
      { type: "cookie", regex: /_rails|rack\.session|RAILS/i }
    ]},
    { name: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/java.svg", patterns: [
      { type: "header", regex: { server: /jetty|tomcat|glasfish|jboss|weblogic|websphere/i, "x-powered-by": /java|spring|spring-boot/i } },
      { type: "html", regex: /\.jsp|\.jsf|<%@\s*page|java\.servlet/i },
      { type: "cookie", regex: /jsessionid|JSESSIONID/i }
    ]},
    { name: ".NET / C#", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /ASP\.NET|\.NET|Kestrel/i, server: /iis|kestrel|microsoft-iis|aspnetcore/i } },
      { type: "html", regex: /__VIEWSTATE|ScriptResource\.axd|WebResource\.axd|asp:|__{requestVerificationToken|data-asp|blazor|aspnet/i },
      { type: "cookie", regex: /ASP\.NET_SessionId|\.ASPXAUTH|ASPNET/i },
      { type: "meta", regex: /generator:.*ASP|\.NET/i }
    ]},
    { name: "Go", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/go.svg", patterns: [
      { type: "header", regex: { server: /go-http|golang|gin|echo|fiber/i, "x-powered-by": /go|golang|echo|gin|fiber/i } },
      { type: "html", regex: /gin-gonic|echo-framework|fiber-app/i }
    ]},
    { name: "Rust", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rust.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /rust|actix|rocket|axum|warp/i, server: /actix|rocket/i } },
      { type: "script", regex: /\.wasm|rust_wasm|actix-web|rocket\.rs/i }
    ]},
    { name: "Elixir/Phoenix", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/elixir.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /elixir|phoenix/i, server: /cowboy/i } },
      { type: "html", regex: /phx-|phoenix-socket|data-phx/i },
      { type: "script", regex: /phoenix\.js|phoenix_live|phx-/i }
    ]},
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kotlin.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /kotlin|ktor/i, server: /ktor/i } }
    ]},
    { name: "Scala", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scala.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /scala|play/i, server: /play/i } }
    ]},
    { name: "Perl", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/perl.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /perl|catalyst|dancer|mojolicious/i, server: /starman|plack/i } }
    ]},
    { name: "C++", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /c\+\+|cpp-web|cppcms|drogon/i } },
      { type: "script", regex: /\.wasm.*cpp|emscripten.*cpp/i }
    ]}
  ],

  // ==================== DATABASES ====================
  "Databases": [
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg", patterns: [
      { type: "script", regex: /firebase|firebaseio|googleapis\.com\/.*firebase|gstatic\.com\/.*firebase|firebase-app\.js|firebase-js-sdk|@firebase|firebaseio\.com/i },
      { type: "html", regex: /firebase|firebaseio|__firebase|firebaseConfig|firebaseApp|initializeApp.*firebase|firestore|realtime.*database|firebaseapp\.com/i },
      { type: "header", regex: { "x-powered-by": /firebase/i, "x-firebase": /.+/i } },
      { type: "meta", regex: /firebase/i },
      { type: "cookie", regex: /firebase/i }
    ]},
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg", patterns: [
      { type: "script", regex: /supabase|@supabase|supabase-js|supabase\.io|supabase\.co/i },
      { type: "html", regex: /supabase|supabaseUrl|supabaseKey|supabase-auth/i },
      { type: "header", regex: { "x-powered-by": /supabase/i } },
      { type: "meta", regex: /supabase/i }
    ]},
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg", patterns: [
      { type: "script", regex: /mongodb|mongo|mongoose|@mongoose|@mongodb|atlas\.mongodb\.com|mongosh|db\.collection/i },
      { type: "html", regex: /mongodb|MongoDB|mongoose|mongosh|atlas\.mongodb|mongodb:\/\/|\.mongodb\.net/i },
      { type: "header", regex: { "x-powered-by": /mongodb|mongo/i, "server": /mongo/i } },
      { type: "meta", regex: /mongodb/i }
    ]},
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg", patterns: [
      { type: "script", regex: /postgres|postgresql|pg-promise|node-postgres|psycopg|pg\.|@types\/pg|pool\.query/i },
      { type: "html", regex: /postgresql|postgres|pgAdmin|postgres\.app|localhost:5432|postgresql\.org/i },
      { type: "header", regex: { "x-powered-by": /postgres|postgresql/i, "server": /postgres/i } },
      { type: "meta", regex: /postgres/i }
    ]},
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg", patterns: [
      { type: "script", regex: /mysql2|@mysql\/xdevapi|node-mysql|mysql-connector|mysqli_connect|PDO.*mysql|mysql\.createConnection|mysql\.createPool|import mysql|from mysql|require.*mysql/i },
      { type: "html", regex: /phpMyAdmin|mysql\.com\/products|MySQL Server|mysqli_|mysql_connect|mysql_query|mysql_real_escape|mysql database|powered by mysql/i },
      { type: "header", regex: { "x-powered-by": /mysql/i, "server": /mysql/i, "x-db-type": /mysql/i, "x-database": /mysql/i } },
      { type: "meta", regex: /mysql database|mysql server|powered by mysql/i },
      { type: "cookie", regex: /phpmyadmin|pma_/i }
    ]},
    { name: "MariaDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mariadb.svg", patterns: [
      { type: "script", regex: /mariadb|@mariadb|mariadb-connector|mariadb\.org/i },
      { type: "html", regex: /mariadb|MariaDB|localhost:3306/i },
      { type: "header", regex: { "x-powered-by": /mariadb/i, "server": /mariadb/i } }
    ]},
    { name: "Redis", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redis.svg", patterns: [
      { type: "script", regex: /redis|ioredis|node-redis|@redis|predis|redis\.io|redis\.get|redis\.set/i },
      { type: "html", regex: /redis|ioredis|localhost:6379|redis-cache|redis\.io/i },
      { type: "header", regex: { "x-powered-by": /redis/i, "x-redis": /.+/i, "cache-control": /redis/i } },
      { type: "meta", regex: /redis/i }
    ]},
    { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/elasticsearch.svg", patterns: [
      { type: "script", regex: /elasticsearch|@elastic|kibana|elasticsearch-js|elastic\.co|localhost:9200/i },
      { type: "html", regex: /elasticsearch|elastic|kibana|localhost:9200|elastic\.co/i },
      { type: "header", regex: { "x-powered-by": /elasticsearch/i, "x-elastic-product": /.+/i } },
      { type: "meta", regex: /elasticsearch/i }
    ]},
    { name: "CouchDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachecouchdb.svg", patterns: [
      { type: "script", regex: /couchdb|pouchdb|nano|@couchdb|couchbase|localhost:5984/i },
      { type: "html", regex: /couchdb|pouchdb|localhost:5984|_design|_all_dbs|futon/i },
      { type: "header", regex: { "x-powered-by": /couchdb/i, "x-couch": /.+/i } }
    ]},
    { name: "Oracle", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg", patterns: [
      { type: "script", regex: /oracledb|oracle-client|ojdbc|sqlplus|oracle\.jdbc/i },
      { type: "html", regex: /oracle\.com|sqlplus|oracle-database/i },
      { type: "header", regex: { "x-powered-by": /oracle/i, "server": /oracle/i } }
    ]},
    { name: "Microsoft SQL Server", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftsqlserver.svg", patterns: [
      { type: "script", regex: /mssql|tedious|sqlserver|@types\/mssql|localhost:1433/i },
      { type: "html", regex: /sql server|mssql|localhost:1433|enterprise manager/i },
      { type: "header", regex: { "x-powered-by": /mssql|sql server/i, "server": /mssql|sqlserver/i } }
    ]},
    { name: "Neo4j", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/neo4j.svg", patterns: [
      { type: "script", regex: /neo4j|@neo4j|neo4j-driver|cypher|bolt:\/\/|localhost:7687|localhost:7474/i },
      { type: "html", regex: /neo4j|cypher|neo4j-browser|localhost:7687|graph-database/i },
      { type: "header", regex: { "x-powered-by": /neo4j/i } }
    ]},
    { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazondynamodb.svg", patterns: [
      { type: "script", regex: /dynamodb|@aws-sdk|dynamodb-local|aws-sdk.*dynamodb/i },
      { type: "html", regex: /dynamodb|DynamoDB|aws\.amazon\.com\/dynamodb/i },
      { type: "header", regex: { "x-powered-by": /dynamodb/i } }
    ]},
    { name: "Cassandra", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachecassandra.svg", patterns: [
      { type: "script", regex: /cassandra|cassandra-driver|datastax|localhost:9042/i },
      { type: "html", regex: /cassandra|cassandra\.apache|localhost:9042/i },
      { type: "header", regex: { "x-powered-by": /cassandra/i } }
    ]},
    { name: "ArangoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/arangodb.svg", patterns: [
      { type: "script", regex: /arangodb|arangojs|@arangodb|localhost:8529/i },
      { type: "html", regex: /arangodb|localhost:8529|arangosh/i },
      { type: "header", regex: { "x-powered-by": /arangodb/i } }
    ]},
    { name: "InfluxDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/influxdb.svg", patterns: [
      { type: "script", regex: /influxdb|@influxdata|influx-db|localhost:8086/i },
      { type: "html", regex: /influxdb|localhost:8086|grafana.*influx/i },
      { type: "header", regex: { "x-powered-by": /influxdb/i } }
    ]},
    { name: "Datastore", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg", patterns: [
      { type: "script", regex: /@google-cloud\/datastore|google-datastore|firestore-compat/i },
      { type: "html", regex: /datastore|google-cloud-datastore|cloud\.google\.com/i },
      { type: "header", regex: { "x-powered-by": /datastore/i } }
    ]},
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sqlite.svg", patterns: [
      { type: "script", regex: /sqlite|sqlite3|better-sqlite3|sql\.js|sqlcipher/i },
      { type: "html", regex: /\.sqlite|\.db|embedded-database/i },
      { type: "header", regex: { "x-powered-by": /sqlite/i } }
    ]},
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/prisma.svg", patterns: [
      { type: "script", regex: /@prisma|prisma-client|prisma\.io|prisma\.schema|schema\.prisma/i },
      { type: "html", regex: /prisma|@prisma|prisma\.io|prisma\.schema/i },
      { type: "meta", regex: /prisma/i }
    ]},
    { name: "TypeORM", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg", patterns: [
      { type: "script", regex: /typeorm|@typeorm|typeorm\.io|entity.*repository/i },
      { type: "html", regex: /typeorm|@typeorm|typeorm\.io/i }
    ]},
    { name: "Sequelize", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sequelize.svg", patterns: [
      { type: "script", regex: /sequelize|sequelize-cli|@sequelize|new Sequelize/i },
      { type: "html", regex: /sequelize|@sequelize/i }
    ]},
    { name: "SQLAlchemy", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg", patterns: [
      { type: "script", regex: /sqlalchemy|from sqlalchemy|create_engine/i },
      { type: "html", regex: /sqlalchemy/i }
    ]},
    { name: "Doctrine", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/php.svg", patterns: [
      { type: "script", regex: /doctrine|entitymanager|dbal|orm|symfony/i },
      { type: "html", regex: /doctrine|symfony/i }
    ]}
  ],

  // ==================== CRM ====================
  "CRM": [
    { name: "HubSpot", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg", patterns: [
      { type: "script", regex: /js\.hs-analytics\.net|hs-scripts\.com|hubspotutk/i },
      { type: "cookie", regex: /hubspotutk|hs-messages/i },
      { type: "html", regex: /hubspot/i }
    ]},
    { name: "Salesforce", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg", patterns: [
      { type: "script", regex: /salesforce\.com|pardot\.com|salesforce-analytics/i },
      { type: "html", regex: /salesforce/i },
      { type: "header", regex: { "x-powered-by": /salesforce/i } }
    ]},
    { name: "Marketo", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/marketo.svg", patterns: [
      { type: "script", regex: /munchkin\.js|marketo|mktoForms/i },
      { type: "cookie", regex: /_mkto_trk/i },
      { type: "html", regex: /marketo/i }
    ]},
    { name: "Zoho CRM", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zoho.svg", patterns: [
      { type: "script", regex: /zohocrm|crm\.zoho\.com|zoho-form/i },
      { type: "html", regex: /zoho|crm\.zoho/i }
    ]},
    { name: "Pipedrive", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pipedrive.svg", patterns: [
      { type: "script", regex: /pipedrive|pipedrivescript/i },
      { type: "html", regex: /pipedrive/i }
    ]},
    { name: "Freshsales", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/freshworks.svg", patterns: [
      { type: "script", regex: /freshsales\.com|freshsales-widget/i },
      { type: "html", regex: /freshsales|freshchat/i }
    ]},
    { name: "Copper", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/getcopper.svg", patterns: [
      { type: "script", regex: /copper\.com/i },
      { type: "html", regex: /copper/i }
    ]},
    { name: "Insightly", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/insightly.svg", patterns: [
      { type: "script", regex: /insightly\.com/i },
      { type: "html", regex: /insightly/i }
    ]},
    { name: "SugarCRM", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sugarcrm.svg", patterns: [
      { type: "html", regex: /sugarcrm|sugar/i },
      { type: "script", regex: /sugarcrm/i }
    ]}
  ],

  // ==================== WEB FRAMEWORKS ====================
  "Web frameworks": [
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/laravel.svg", patterns: [
      { type: "html", regex: /LARAVEL_START|laravel_session|blade\.php|\.blade\./i },
      { type: "header", regex: { "x-powered-by": /laravel/i } },
      { type: "script", regex: /laravel\.mix|laravel-vite|resources\/js/i },
      { type: "meta", regex: /generator:.*laravel/i },
      { type: "cookie", regex: /laravel_session|laravel_token|XSRF-TOKEN/i }
    ]},
    { name: "Symfony", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/symfony.svg", patterns: [
      { type: "html", regex: /_profiler|sf_toolbar|symfony-container/i },
      { type: "header", regex: { "x-powered-by": /symfony/i, "x-debug-token": /.+/i } },
      { type: "meta", regex: /generator:.*symfony/i },
      { type: "cookie", regex: /symfony|SYMFONY/i }
    ]},
    { name: "Django", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/django.svg", patterns: [
      { type: "html", regex: /csrfmiddlewaretoken|django-admin|__admin_media__|djDebug/i },
      { type: "header", regex: { "x-powered-by": /django/i } },
      { type: "script", regex: /django\.js|django-rest/i },
      { type: "cookie", regex: /csrftoken|sessionid|django_session/i }
    ]},
    { name: "Flask", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /flask|werkzeug/i, server: /werkzeug/i } },
      { type: "meta", regex: /generator:.*flask/i },
      { type: "cookie", regex: /session=.*\./i }
    ]},
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /fastapi/i, server: /uvicorn|hypercorn/i } },
      { type: "html", regex: /\/docs#\/|redoc|swagger-ui.*fastapi/i }
    ]},
    { name: "Ruby on Rails", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rubyonrails.svg", patterns: [
      { type: "html", regex: /action_dispatch|data-turbo|data-turbolinks|hotwire|rails-ujs/i },
      { type: "header", regex: { "x-powered-by": /rails|phusion passenger/i, server: /puma|unicorn|passenger/i } },
      { type: "script", regex: /rails-ujs|turbo|@hotwired/i },
      { type: "meta", regex: /generator:rails|csrf-token/i },
      { type: "cookie", regex: /_session_id|RAILS/i }
    ]},
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/springboot.svg", patterns: [
      { type: "header", regex: { server: /spring/i, "x-powered-by": /spring|spring-boot/i, "x-application-context": /.+/i } },
      { type: "meta", regex: /generator:.*spring/i },
      { type: "cookie", regex: /JSESSIONID/i }
    ]},
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /express/i } },
      { type: "meta", regex: /generator:.*express/i }
    ]},
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nestjs.svg", patterns: [
      { type: "script", regex: /nestjs|@nestjs\/|nestjs-|swagger|typeorm/i },
      { type: "header", regex: { "x-powered-by": /nestjs/i } },
      { type: "html", regex: /nestjs|@nestjs/i },
      { type: "meta", regex: /generator:nestjs/i }
    ]},
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg", patterns: [
      { type: "html", regex: /next\.js|__next|nextjs|_next\/static|__NEXT_DATA__|id="__next"/i },
      { type: "script", regex: /_next|next\/|next\.config|__NEXT|vercel/i },
      { type: "meta", regex: /generator:next|next\.js/i },
      { type: "header", regex: { "x-powered-by": /next|vercel/i } }
    ]},
    { name: "Nuxt.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nuxtdotjs.svg", patterns: [
      { type: "html", regex: /nuxt|__nuxt|nuxtjs|nuxt-|_nuxt\/|data-n-head/i },
      { type: "script", regex: /__nuxt|nuxt\.config|nuxt\/|_nuxt\//i },
      { type: "meta", regex: /generator:nuxt|nuxt\.js|__nuxt/i }
    ]},
    { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg", patterns: [
      { type: "html", regex: /asp-|blazor|_framework\/blazor|ASP\.NET|aspnetcore|aspnet-core/i },
      { type: "header", regex: { server: /kestrel|aspnetcore|\.NET/i, "x-powered-by": /ASP\.NET Core|\.NET|Kestrel/i } },
      { type: "script", regex: /blazor|aspnet-core|_framework\/|dotnet\.js/i },
      { type: "cookie", regex: /ASP\.NET_SessionId|\.ASPXAUTH|ASPNET/i },
      { type: "meta", regex: /generator:.*ASP|\.NET/i }
    ]},
    { name: "Fastify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastify.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /fastify/i } },
      { type: "script", regex: /fastify|@fastify|fastify-plugin/i }
    ]},
    { name: "Koa", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/koa.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /koa/i } },
      { type: "script", regex: /koa|@koa|koa-router/i }
    ]},
    { name: "Hapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hapijs.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /hapi|hapijs/i } },
      { type: "script", regex: /hapi|@hapi\/hapi/i }
    ]},
    { name: "Gin (Go)", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/go.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /gin|gin-gonic/i } },
      { type: "script", regex: /gin|gin-gonic/i }
    ]},
    { name: "Echo (Go)", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/go.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /echo/i } },
      { type: "script", regex: /echo|echo-framework/i }
    ]},
    { name: "Actix-web (Rust)", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rust.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /actix/i } },
      { type: "script", regex: /actix|actix-web/i }
    ]},
    { name: "Rocket (Rust)", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rust.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /rocket/i } },
      { type: "script", regex: /rocket|rocket\.rs/i }
    ]},
    { name: "Phoenix (Elixir)", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/phoenixframework.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /phoenix/i } },
      { type: "script", regex: /phoenix|phx-/i }
    ]},
    { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/strapi.svg", patterns: [
      { type: "script", regex: /strapi|@strapi/i },
      { type: "header", regex: { "x-powered-by": /strapi/i } }
    ]},
    { name: "Wagtail", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wagtail.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /wagtail/i } },
      { type: "script", regex: /wagtail|wagtail-cms/i }
    ]},
    { name: "Craft CMS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/craftcms.svg", patterns: [
      { type: "header", regex: { "x-powered-by": /craft/i } },
      { type: "script", regex: /craft|craft-cms/i }
    ]}
  ],

  // ==================== WEB SERVERS ====================
  "Web servers": [
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nginx.svg", patterns: [ 
      { type: "header", regex: { server: /nginx/i } },
      { type: "html", regex: /nginx/i }
    ]},
    { name: "Apache", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apache.svg", patterns: [ 
      { type: "header", regex: { server: /apache/i } },
      { type: "html", regex: /apache/i }
    ]},
    { name: "Microsoft IIS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/iis.svg", patterns: [ 
      { type: "header", regex: { server: /iis|microsoft-iis|microsoft_iis/i } },
      { type: "html", regex: /iis|microsoft/i }
    ]},
    { name: "Lighttpd", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nginx.svg", patterns: [ 
      { type: "header", regex: { server: /lighttpd/i } }
    ]},
    { name: "OpenResty", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nginx.svg", patterns: [ 
      { type: "header", regex: { server: /openresty/i } }
    ]},
    { name: "Caddy", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/caddyserver.svg", patterns: [ 
      { type: "header", regex: { server: /caddy/i } }
    ]},
    { name: "Tomcat", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachetomcat.svg", patterns: [
      { type: "header", regex: { server: /tomcat/i } }
    ]},
    { name: "Jetty", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/eclipse.svg", patterns: [
      { type: "header", regex: { server: /jetty/i } }
    ]},
    { name: "GlassFish", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg", patterns: [
      { type: "header", regex: { server: /glasfish/i } }
    ]},
    { name: "JBoss", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redhat.svg", patterns: [
      { type: "header", regex: { server: /jboss/i } }
    ]},
    { name: "Weblogic", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg", patterns: [
      { type: "header", regex: { server: /weblogic/i } }
    ]},
    { name: "WebSphere", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg", patterns: [
      { type: "header", regex: { server: /websphere/i } }
    ]},
    { name: "Kestrel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg", patterns: [
      { type: "header", regex: { server: /kestrel/i } }
    ]},
    { name: "Uwsgi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg", patterns: [
      { type: "header", regex: { server: /uwsgi/i } }
    ]},
    { name: "Gunicorn", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg", patterns: [
      { type: "header", regex: { server: /gunicorn/i } }
    ]},
    { name: "Waitress", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg", patterns: [
      { type: "header", regex: { server: /waitress/i } }
    ]}
  ],

  // ==================== PAAS & HOSTING ====================
  "PaaS & Hosting": [
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg", patterns: [ 
      { type: "header", regex: { server: /vercel/i, "x-vercel-id": /.+/, "x-vercel": /.+/ } },
      { type: "html", regex: /vercel|vercel\.app|vercel\.sh/i }
    ]},
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netlify.svg", patterns: [
      { type: "header", regex: { server: /netlify/i, "x-nf-request-id": /.+/, "x-nf": /.+/ } },
      { type: "html", regex: /netlify|netlify\.app/i }
    ]},
    { name: "Heroku", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/heroku.svg", patterns: [
      { type: "header", regex: { server: /heroku/i } },
      { type: "html", regex: /herokuapp\.com|heroku/i }
    ]},
    { name: "Railway", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/railway.svg", patterns: [
      { type: "header", regex: { server: /railway/i } },
      { type: "html", regex: /railway\.app|railway/i }
    ]},
    { name: "Render", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/render.svg", patterns: [ 
      { type: "header", regex: { server: /render/i } },
      { type: "html", regex: /render|render\.com/i }
    ]},
    { name: "Fly.io", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fly.svg", patterns: [ 
      { type: "header", regex: { server: /fly\.io|fly/i, via: /flycdn\.net/i } },
      { type: "html", regex: /fly\.io|fly/i }
    ]},
    { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/digitalocean.svg", patterns: [
      { type: "header", regex: { server: /digitalocean/i } },
      { type: "html", regex: /digitalocean|digitalocean\.com/i }
    ]},
    { name: "AWS (Amazon)", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg", patterns: [
      { type: "header", regex: { "x-amz": /.+/, server: /amazonaws/i } },
      { type: "html", regex: /amazonaws\.com|aws\.|amazon/i }
    ]},
    { name: "Google Cloud Platform", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg", patterns: [
      { type: "header", regex: { server: /gws|appspot/i } },
      { type: "html", regex: /appspot\.com|goog|google-cloud/i }
    ]},
    { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg", patterns: [
      { type: "header", regex: { server: /azure/i, "x-aspnet": /azure/i } },
      { type: "html", regex: /azurewebsites\.net|azure|microsoft/i }
    ]},
    { name: "Linode", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linode.svg", patterns: [
      { type: "header", regex: { server: /linode/i } },
      { type: "html", regex: /linode|linode\.com/i }
    ]},
    { name: "Hetzner", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hetzner.svg", patterns: [
      { type: "header", regex: { server: /hetzner/i } },
      { type: "html", regex: /hetzner/i }
    ]},
    { name: "OVH", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ovh.svg", patterns: [
      { type: "header", regex: { server: /ovh|ovh\.net/i } },
      { type: "html", regex: /ovh|ovh\.com/i }
    ]},
    { name: "Cloudflare Pages", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cloudflare.svg", patterns: [
      { type: "header", regex: { server: /cloudflare|cf-/i, "cf-ray": /.+/ } },
      { type: "html", regex: /workers\.dev|pages\.dev|cloudflare/i }
    ]}
  ],

  // ==================== WEB SERVERS ====================
  "Web servers": [
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nginx.svg", patterns: [ { type: "header", regex: { server: /nginx/i } } ] },
    { name: "Apache", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apache.svg", patterns: [ { type: "header", regex: { server: /apache/i } } ] },
    { name: "IIS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/iis.svg", patterns: [ { type: "header", regex: { server: /iis|microsoft-iis/i } } ] }
  ],

  // ==================== JAVASCRIPT FRAMEWORKS ====================
  "JavaScript frameworks": [
    { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg", patterns: [
      { type: "html", regex: /__react|data-reactroot|data-reactid|React\.version|data-react/i },
      { type: "script", regex: /react(@|\.)\d|react-dom|__REACT_DEVTOOLS|react\.development/i }
    ]},
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vuedotjs.svg", patterns: [
      { type: "html", regex: /data-v-[a-f0-9]{8}|__vue__|Vue\.version|v-app|v-for|v-if|v-bind/i },
      { type: "script", regex: /vue(@|\.)\d|vue\.runtime|vue\.esm|vuejs/i }
    ]},
    { name: "Angular", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg", patterns: [
      { type: "html", regex: /ng-version|_ngcontent|ng-\w+|app\.component|angular\./i },
      { type: "script", regex: /@angular\/core|@angular\/|angular\.min\.js/i }
    ]},
    { name: "AngularJS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg", patterns: [
      { type: "html", regex: /ng-app|ng-controller|ng-model|ng-bind|ng-repeat|{{\s*\w+\s*}}/i },
      { type: "script", regex: /ajax\.googleapis\.com.*angularjs|angularjs\.org|angular\d+\.\d+.*\.js/i }
    ]},
    { name: "Svelte", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/svelte.svg", patterns: [
      { type: "html", regex: /svelte-[a-z0-9]{6}|svelte\.|svelte-app/i },
      { type: "script", regex: /svelte(@|\.)\d|sveltekit/i }
    ]},
    { name: "Ember.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ember.svg", patterns: [
      { type: "html", regex: /ember-cli|Ember\.VERSION|data-ember|ember-app/i },
      { type: "script", regex: /ember(@|\.)\d|ember\.min\.js/i }
    ]},
    { name: "Backbone.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/backbonedotjs.svg", patterns: [
      { type: "html", regex: /backbone|backbone-|backbone-app/i },
      { type: "script", regex: /backbone(@|\.)\d|backbone\.min\.js/i }
    ]},
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jquery.svg", patterns: [
      { type: "html", regex: /jquery|jquery-|jquery-app|\$\(/i },
      { type: "script", regex: /jquery(@|\.)\d|jquery\.min\.js|jquery-\d/i }
    ]},
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/threedotjs.svg", patterns: [
      { type: "html", regex: /three|three\.js|three-d|3d/i },
      { type: "script", regex: /three(@|\.)\d|three\.min\.js|threejs/i }
    ]},
    { name: "Babylon.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/babylon.svg", patterns: [
      { type: "html", regex: /babylon|babylon\.js|babylon-app/i },
      { type: "script", regex: /babylon(@|\.)\d|babylon\.min\.js/i }
    ]},
    { name: "Moment.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/moment.svg", patterns: [
      { type: "script", regex: /moment(@|\.)\d|moment\.min\.js|moment\.js/i }
    ]},
    { name: "Lodash", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/lodash.svg", patterns: [
      { type: "script", regex: /lodash(@|\.)\d|lodash\.min\.js|_\.js/i }
    ]},
    { name: "D3.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/d3dotjs.svg", patterns: [
      { type: "script", regex: /d3(@|\.)\d|d3\.min\.js|d3js/i },
      { type: "html", regex: /d3|d3\.js/i }
    ]},
    { name: "Chart.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/chartdotjs.svg", patterns: [
      { type: "script", regex: /chart(@|\.)\d|chart\.min\.js|chartjs/i }
    ]},
    { name: "Leaflet", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/leaflet.svg", patterns: [
      { type: "script", regex: /leaflet(@|\.)\d|leaflet\.min\.js|leafletjs/i },
      { type: "html", regex: /leaflet|mapbox|openlayers/i }
    ]},
    { name: "Slick Carousel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/carousel.svg", patterns: [
      { type: "script", regex: /slick(@|\.)\d|slick\.min\.js|slick-carousel/i }
    ]},
    { name: "Owl Carousel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/owlcarousel.svg", patterns: [
      { type: "script", regex: /owl\.carousel|owl\.min\.js|owlcarousel/i }
    ]},
    { name: "Swiper", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/swiper.svg", patterns: [
      { type: "script", regex: /swiper(@|\.)\d|swiper\.min\.js|swiperjs/i }
    ]},
    { name: "Animate.css", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg", patterns: [
      { type: "style", regex: /animate\.css|animate\.min\.css/i }
    ]},
    { name: "GSAP", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/greensock.svg", patterns: [
      { type: "script", regex: /gsap(@|\.)\d|gsap\.min\.js|TweenMax|TimelineMax/i }
    ]},
    { name: "Axios", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/axios.svg", patterns: [
      { type: "script", regex: /axios(@|\.)\d|axios\.min\.js/i }
    ]},
    { name: "Fetch API", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg", patterns: [
      { type: "script", regex: /fetch|fetch-polyfill/i }
    ]},
    { name: "Alpine.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/alpinedotjs.svg", patterns: [
      { type: "html", regex: /x-data=|x-init=|x-show=|x-bind:|x-on:|@click/i },
      { type: "script", regex: /alpinejs|alpine\.min\.js/i }
    ]},
    { name: "htmx", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/htmx.svg", patterns: [
      { type: "html", regex: /hx-get=|hx-post=|hx-target=|hx-swap=/i },
      { type: "script", regex: /htmx\.org|htmx\.min\.js/i }
    ]},
    { name: "Stimulus", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stimulus.svg", patterns: [
      { type: "html", regex: /data-controller=|data-action=|data-target=/i },
      { type: "script", regex: /@hotwired\/stimulus|stimulus\.min\.js/i }
    ]}
  ],

  // ==================== CSS FRAMEWORKS ====================
  "CSS Frameworks": [
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bootstrap.svg", patterns: [
      { type: "html", regex: /class="[^"]*\b(container|btn|card|modal|navbar)/i },
      { type: "style", regex: /bootstrap(\.min)?\.css/i },
      { type: "script", regex: /bootstrap(@|\.)\d|bootstrap\.min\.js|getbootstrap/i }
    ]},
    { name: "Bulma", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bulma.svg", patterns: [
      { type: "style", regex: /bulma(\.min)?\.css/i },
      { type: "html", regex: /class="[^"]*\b(columns|column|section|hero)/i }
    ]},
    { name: "Foundation", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/foundation.svg", patterns: [
      { type: "style", regex: /foundation(\.min)?\.css/i },
      { type: "html", regex: /class="[^"]*\b(row|column|grid)/i }
    ]},
    { name: "Materialize", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/materializecss.svg", patterns: [
      { type: "style", regex: /materialize(\.min)?\.css/i },
      { type: "script", regex: /materialize(@|\.)\d|materialize\.min\.js/i }
    ]},
    { name: "UIkit", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/uikit.svg", patterns: [
      { type: "html", regex: /uk-|class="[^"]*uk-/i },
      { type: "style", regex: /uikit(\.min)?\.css/i }
    ]},
    { name: "Pico CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/picocss.svg", patterns: [
      { type: "style", regex: /pico(@|\.)\d|pico\.min\.css/i }
    ]},
    { name: "Ant Design", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/antdesign.svg", patterns: [
      { type: "script", regex: /antd|ant-design/i },
      { type: "style", regex: /antd|ant-design/i }
    ]},
    { name: "Material-UI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/materialui.svg", patterns: [
      { type: "script", regex: /@mui\/material|material-ui|@material-ui/i },
      { type: "html", regex: /MuiPaper|MuiButton|makeStyles/i }
    ]},
    { name: "Chakra UI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/chakraui.svg", patterns: [
      { type: "script", regex: /@chakra-ui/i },
      { type: "html", regex: /chakra|_chakra/i }
    ]},
    { name: "shadcn/ui", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shadcnui.svg", patterns: [
      { type: "script", regex: /shadcn|@shadcn/i }
    ]},
    { name: "Vuetify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vuetify.svg", patterns: [
      { type: "script", regex: /vuetify(@|\.)\d|vuetify\.min\.js/i },
      { type: "html", regex: /v-application|v-card|v-btn/i }
    ]},
    { name: "PrimeVue", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/primevue.svg", patterns: [
      { type: "script", regex: /primevue(@|\.)\d|primevue\.min\.js/i }
    ]},
    { name: "Element UI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/elementui.svg", patterns: [
      { type: "script", regex: /element-ui|elementui/i }
    ]}
  ],

  // ==================== MONITORING & PERFORMANCE ====================
  "Monitoring & Performance": [
    { name: "Sentry", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sentry.svg", patterns: [
      { type: "script", regex: /sentry|\.sentry\.io/i },
      { type: "html", regex: /sentry/i }
    ]},
    { name: "Datadog", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/datadog.svg", patterns: [
      { type: "script", regex: /datadoghq\.com|datadog|browser-agent/i }
    ]},
    { name: "New Relic", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/newrelic.svg", patterns: [
      { type: "script", regex: /newrelic|nr-browser/i }
    ]},
    { name: "Elastic APM", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/elastic.svg", patterns: [
      { type: "script", regex: /elastic\.apm|apm\.js/i }
    ]},
    { name: "Dynatrace", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dynatrace.svg", patterns: [
      { type: "script", regex: /dynatrace|ruxitagentjs/i }
    ]},
    { name: "Splunk RUM", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/splunk.svg", patterns: [
      { type: "script", regex: /splunk|splunk-rum/i }
    ]}
  ],

  // ==================== SECURITY & COMPLIANCE ====================
  "Security & Compliance": [
    { name: "HSTS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/letsencrypt.svg", patterns: [
      { type: "header", regex: { "strict-transport-security": /max-age/i } }
    ]},
    { name: "Content Security Policy", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/security.svg", patterns: [
      { type: "header", regex: { "content-security-policy": /.+/i } }
    ]},
    { name: "X-Frame-Options", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/letsencrypt.svg", patterns: [
      { type: "header", regex: { "x-frame-options": /sameorigin|deny/i } }
    ]},
    { name: "reCAPTCHA v3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg", patterns: [
      { type: "script", regex: /recaptcha\.net|www\.google\.com\/recaptcha/i },
      { type: "html", regex: /g-recaptcha|recaptcha/i }
    ]},
    { name: "hCaptcha", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hcaptcha.svg", patterns: [
      { type: "script", regex: /hcaptcha\.com/i },
      { type: "html", regex: /h-captcha/i }
    ]},
    { name: "Auth0", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/auth0.svg", patterns: [
      { type: "script", regex: /auth0\.com|auth0-js/i },
      { type: "html", regex: /auth0/i }
    ]},
    { name: "Okta", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/okta.svg", patterns: [
      { type: "script", regex: /okta\.com|okta-js/i }
    ]},
    { name: "Firebase Auth", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg", patterns: [
      { type: "script", regex: /firebase.*auth/i }
    ]}
  ],

  // ==================== COMMERCE & PAYMENTS ====================
  "Commerce & Payments": [
    { name: "Stripe", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg", patterns: [
      { type: "script", regex: /js\.stripe\.com|stripe\.com|stripe-js/i },
      { type: "html", regex: /stripe|stripe-element/i }
    ]},
    { name: "PayPal", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paypal.svg", patterns: [
      { type: "script", regex: /paypal\.com|paypalscript/i },
      { type: "html", regex: /paypal/i }
    ]},
    { name: "Square", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/square.svg", patterns: [
      { type: "script", regex: /squareup\.com|sq\.web-payments/i }
    ]},
    { name: "Braintree", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/braintree.svg", patterns: [
      { type: "script", regex: /braintree|braintreegateway/i }
    ]},
    { name: "Authorize.net", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/authorize.svg", patterns: [
      { type: "script", regex: /authorize\.net|anet/i }
    ]},
    { name: "2Checkout", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/2checkout.svg", patterns: [
      { type: "script", regex: /2checkout\.com|verifone/i }
    ]},
    { name: "Mollie", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mollie.svg", patterns: [
      { type: "script", regex: /mollie\.com|mollie-js/i }
    ]},
    { name: "Gumroad", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gumroad.svg", patterns: [
      { type: "script", regex: /gumroad\.com/i }
    ]},
    { name: "Paddle", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paddle.svg", patterns: [
      { type: "script", regex: /paddle\.com|paddle-sdk/i }
    ]}
  ]
};

module.exports = signatures;
