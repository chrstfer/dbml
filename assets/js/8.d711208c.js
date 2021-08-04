(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{214:function(e,t,n){"use strict";n.r(t);var a=n(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"dbml-full-syntax-docs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dbml-full-syntax-docs"}},[e._v("#")]),e._v(" DBML - Full Syntax Docs")]),e._v(" "),n("p",[e._v("DBML (database markup language) is a simple, readable DSL language designed to define database structures. This page\noutlines the full syntax documentations of DBML.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#project-definition"}},[e._v("Project Definition")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#table-definition"}},[e._v("Table Definition")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#table-alias"}},[e._v("Table Alias")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#table-notes"}},[e._v("Table Notes")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#table-settings"}},[e._v("Table Settings")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#column-definition"}},[e._v("Column Definition")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#column-settings"}},[e._v("Column Settings")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#default-value"}},[e._v("Default Value")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#index-definition"}},[e._v("Index Definition")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#index-settings"}},[e._v("Index Settings")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#relationships-foreign-key-definitions"}},[e._v("Relationships & Foreign Key Definitions")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#relationship-settings"}},[e._v("Relationship settings")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#many-to-many-relationship"}},[e._v("Many-to-many relationship")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#comments"}},[e._v("Comments")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#note-definition"}},[e._v("Note Definition")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#project-notes"}},[e._v("Project Notes")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#table-notes"}},[e._v("Table Notes")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#column-notes"}},[e._v("Column Notes")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#multi-line-string"}},[e._v("Multi-line String")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#enum-definition"}},[e._v("Enum Definition")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#tablegroup"}},[e._v("TableGroup")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#syntax-consistency"}},[e._v("Syntax Consistency")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#community-contributions"}},[e._v("Community Contributions")])])]),e._v(" "),n("h5",{attrs:{id:"take-a-look-at-an-example-below"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#take-a-look-at-an-example-below"}},[e._v("#")]),e._v(" Take a look at an example below:")]),e._v(" "),n("pre",[n("code",[e._v("Table users {\n    id integer\n    username varchar\n    role varchar\n    created_at timestamp\n}\n\nTable posts {\n    id integer [primary key]\n    title varchar\n    body text [note: 'Content of the post']\n    user_id integer\n    created_at timestamp\n}\n\nRef: posts.user_id > users.id // many-to-one\n")])]),e._v(" "),n("h2",{attrs:{id:"project-definition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-definition"}},[e._v("#")]),e._v(" Project Definition")]),e._v(" "),n("p",[e._v("You can give overall description of the project.")]),e._v(" "),n("pre",[n("code",[e._v("Project project_name {\n  database_type: 'PostgreSQL'\n  Note: 'Description of the project'\n}\n")])]),e._v(" "),n("h2",{attrs:{id:"table-definition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-definition"}},[e._v("#")]),e._v(" Table Definition")]),e._v(" "),n("pre",[n("code",[e._v("Table table_name {\n    column_name column_type [column_settings]\n}\n")])]),e._v(" "),n("ul",[n("li",[e._v("title of database table is listed as "),n("code",[e._v("table_name")])]),e._v(" "),n("li",[e._v("name of the column is listed as "),n("code",[e._v("column_name")])]),e._v(" "),n("li",[e._v("type of the data in the column listed as "),n("code",[e._v("column_type")]),e._v(" "),n("ul",[n("li",[e._v("supports all data types, as long as it is a single word (remove all spaces in the data type). Example, JSON, JSONB, decimal(1,2), etc.")])])]),e._v(" "),n("li",[e._v("list is wrapped in "),n("code",[e._v("curly brackets {}")]),e._v(", for indexes, constraints and table definitions.")]),e._v(" "),n("li",[e._v("settings are wrapped in "),n("code",[e._v("square brackets []")])]),e._v(" "),n("li",[e._v("string value is be wrapped in a "),n("code",[e._v("single quote as 'string'")])]),e._v(" "),n("li",[n("code",[e._v("column_name")]),e._v(" can be stated in just plain text, or wrapped in a "),n("code",[e._v('double quote as "column name"')])])]),e._v(" "),n("h3",{attrs:{id:"table-alias"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-alias"}},[e._v("#")]),e._v(" Table Alias")]),e._v(" "),n("p",[e._v("You can alias the table, and use them in the references later on.")]),e._v(" "),n("pre",[n("code",[e._v("Table very_long_user_table as U {\n    ...\n}\n\nRef: U.id < posts.user_id\n")])]),e._v(" "),n("h3",{attrs:{id:"table-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-notes"}},[e._v("#")]),e._v(" Table Notes")]),e._v(" "),n("p",[e._v("You can add notes to the table, and refer to them in the visual plane.")]),e._v(" "),n("pre",[n("code",[e._v("Table users {\n    id integer\n    status varchar [note: 'status']\n\n    Note: 'Stores user data'\n}\n")])]),e._v(" "),n("h3",{attrs:{id:"table-settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-settings"}},[e._v("#")]),e._v(" Table Settings")]),e._v(" "),n("p",[e._v("Settings are all defined within square brackets: "),n("code",[e._v("[setting1: value1, setting2: value2, setting3, setting4]")])]),e._v(" "),n("p",[e._v("Each setting item can take in 2 forms: "),n("code",[e._v("Key: Value")]),e._v(" or "),n("code",[e._v("keyword")]),e._v(", similar to that of Python function parameters.")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("headercolor: <color_code>")]),e._v(": change the table header color (coming soon)")]),e._v(" "),n("p",[e._v("Example, "),n("code",[e._v("[headercolor: #3498db]")])])])]),e._v(" "),n("h2",{attrs:{id:"column-definition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column-definition"}},[e._v("#")]),e._v(" Column Definition")]),e._v(" "),n("h3",{attrs:{id:"column-settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column-settings"}},[e._v("#")]),e._v(" Column Settings")]),e._v(" "),n("p",[e._v("Each column can take have optional settings, defined in square brackets like:")]),e._v(" "),n("pre",[n("code",[e._v("Table buildings {\n    ...\n    address varchar(255) [unique, not null, note: 'to include unit number']\n    id integer [ pk, unique, default: 123, note: 'Number' ]\n}\n")])]),e._v(" "),n("p",[e._v("The list of column settings you can use:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("note: 'string to add notes'")]),e._v(": add a metadata note to this column")]),e._v(" "),n("li",[n("code",[e._v("primary key")]),e._v(" or "),n("code",[e._v("pk")]),e._v(": mark a column as primary key. For composite primary key, refer to the 'Indexes' section")]),e._v(" "),n("li",[n("code",[e._v("null")]),e._v(" or "),n("code",[e._v("not null")]),e._v(": mark a column null or not null")]),e._v(" "),n("li",[n("code",[e._v("unique")]),e._v(": mark the column unique")]),e._v(" "),n("li",[n("code",[e._v("default: some_value")]),e._v(": set a default value of the column, please refer to the 'Default Value' section below")]),e._v(" "),n("li",[n("code",[e._v("increment")]),e._v(": mark the column as auto-increment")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" You can use a workaround for un-supported settings by adding the setting name into the column type name, such as "),n("code",[e._v("id “bigint unsigned” [pk]")])]),e._v(" "),n("h3",{attrs:{id:"default-value"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#default-value"}},[e._v("#")]),e._v(" Default Value")]),e._v(" "),n("p",[e._v("You can set default value as:")]),e._v(" "),n("ul",[n("li",[e._v("number value starts blank: "),n("code",[e._v("default: 123")]),e._v(" or "),n("code",[e._v("default: 123.456")])]),e._v(" "),n("li",[e._v("string value starts with single quotes: "),n("code",[e._v("default: 'some string value'")])]),e._v(" "),n("li",[e._v("expression value is wrapped with parenthesis: "),n("code",[e._v("default: `now() - interval '5 days'`")])]),e._v(" "),n("li",[e._v("boolean (true/false/null): "),n("code",[e._v("default: false")]),e._v(" or "),n("code",[e._v("default: null")])])]),e._v(" "),n("p",[e._v("Example,")]),e._v(" "),n("pre",[n("code",[e._v("Table users {\n    id integer [primary key]\n    username varchar(255) [not null, unique]\n    full_name varchar(255) [not null]\n    gender varchar(1) [default: 'm']\n    created_at timestamp [default: `now()`]\n    rating integer [default: 10]\n}\n")])]),e._v(" "),n("h2",{attrs:{id:"index-definition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index-definition"}},[e._v("#")]),e._v(" Index Definition")]),e._v(" "),n("p",[e._v("Indexes allow users to quickly locate and access the data. Users can define single or multi-column indexes.")]),e._v(" "),n("pre",[n("code",[e._v("Table bookings {\n  id integer\n  country varchar\n  booking_date date\n  created_at timestamp\n\n  indexes {\n      (id, country) [pk] // composite primary key\n      created_at [name: 'created_at_index', note: 'Date']\n      booking_date\n      (country, booking_date) [unique]\n      booking_date [type: hash]\n      (`id*2`)\n      (`id*3`,`getdate()`)\n      (`id*3`,id)\n  }\n}\n")])]),e._v(" "),n("p",[e._v("There are 3 types of index definitions:")]),e._v(" "),n("ul",[n("li",[e._v("Index with single field (with index name): "),n("code",[e._v("CREATE INDEX created_at_index on users (created_at)")])]),e._v(" "),n("li",[e._v("Index with multiple fields (composite index): "),n("code",[e._v("CREATE INDEX on users (created_at, country)")])]),e._v(" "),n("li",[e._v("Index with an expression: "),n("code",[e._v("CREATE INDEX ON films ( first_name + last_name )")])]),e._v(" "),n("li",[e._v("(bonus) Composite index with expression: "),n("code",[e._v("CREATE INDEX ON users ( country, (lower(name)) )")])])]),e._v(" "),n("h3",{attrs:{id:"index-settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index-settings"}},[e._v("#")]),e._v(" Index Settings")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("type")]),e._v(": type of index (btree, gin, gist, hash depending on DB). For now, only type btree and hash are accepted.")]),e._v(" "),n("li",[n("code",[e._v("name")]),e._v(": name of index")]),e._v(" "),n("li",[n("code",[e._v("unique")]),e._v(": unique index")]),e._v(" "),n("li",[n("code",[e._v("pk")]),e._v(": primary key")])]),e._v(" "),n("h2",{attrs:{id:"relationships-foreign-key-definitions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#relationships-foreign-key-definitions"}},[e._v("#")]),e._v(" Relationships & Foreign Key Definitions")]),e._v(" "),n("p",[e._v("Relationships are used to define foreign key constraints between tables.")]),e._v(" "),n("pre",[n("code",[e._v("Table posts {\n    id integer [primary key]\n    user_id integer [ref: > users.id] // many-to-one\n}\n\n// or this\nTable users {\n    id integer [ref: < posts.user_id, ref: < reviews.user_id] // one to many\n}\n\n// The space after '<' is optional\n")])]),e._v(" "),n("p",[e._v("There are 3 types of relationships: one-to-one, one-to-many, and many-to-one")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("<")]),e._v(": one-to-many. E.g: "),n("code",[e._v("users.id < posts.user_id")])]),e._v(" "),n("li",[n("code",[e._v(">")]),e._v(": many-to-one. E.g: "),n("code",[e._v("posts.user_id > users.id")])]),e._v(" "),n("li",[n("code",[e._v("-")]),e._v(": one-to-one. E.g: "),n("code",[e._v("users.id - user_infos.user_id")])])]),e._v(" "),n("p",[n("strong",[e._v("Composite foreign keys:")])]),e._v(" "),n("pre",[n("code",[e._v("Ref: merchant_periods.(merchant_id, country_code) > merchants.(id, country_code)\n")])]),e._v(" "),n("p",[e._v("In DBML, there are 3 syntaxes to define relationships:")]),e._v(" "),n("pre",[n("code",[e._v("//Long form\nRef name_optional {\n  table1.column1 < table2.column2\n}\n\n//Short form:\nRef name_optional: table1.column1 < table2.column2\n\n// Inline form\nTable posts {\n    id integer\n    user_id integer [ref: > users.id]\n}\n")])]),e._v(" "),n("h3",{attrs:{id:"relationship-settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#relationship-settings"}},[e._v("#")]),e._v(" Relationship settings")]),e._v(" "),n("pre",[n("code",[e._v("Ref: products.merchant_id > merchants.id [delete: cascade, update: no action]\n")])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("delete / update: cascade | restrict | set null | set default | no action")]),n("br"),e._v("\nDefine referential actions. Similar to "),n("code",[e._v("ON DELETE/UPDATE CASCADE/...")]),e._v(" in SQL.")])]),e._v(" "),n("p",[n("em",[e._v("Relationship settings are not supported for inline form ref.")])]),e._v(" "),n("h3",{attrs:{id:"many-to-many-relationship"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#many-to-many-relationship"}},[e._v("#")]),e._v(" Many-to-many relationship")]),e._v(" "),n("p",[e._v("For many-to-many relationship, we don't have a syntax for it as we believe it should be represented as 2 many-to-one relationships. For more information, please refer to "),n("a",{attrs:{href:"https://www.holistics.io/blog/dbdiagram-io-many-to-many-relationship-diagram-generator-script/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.holistics.io/blog/dbdiagram-io-many-to-many-relationship-diagram-generator-script/"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"comments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[e._v("#")]),e._v(" Comments")]),e._v(" "),n("p",[e._v("You can comment in your code using "),n("code",[e._v("//")]),e._v(", so it is easier for you to review the code later.")]),e._v(" "),n("p",[e._v("Example,")]),e._v(" "),n("pre",[n("code",[e._v("// order_items refer to items from that order\n")])]),e._v(" "),n("h2",{attrs:{id:"note-definition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#note-definition"}},[e._v("#")]),e._v(" Note Definition")]),e._v(" "),n("p",[e._v("Note allows users to give description for a particular DBML element.")]),e._v(" "),n("pre",[n("code",[e._v("Table users {\n  id int [pk]\n  name varchar\n\n  Note: 'This is a note of this table'\n  // or\n  Note {\n    'This is a note of this table'\n  }\n}\n")])]),e._v(" "),n("p",[e._v("Note's value is a string. If your note spans over multiple lines, you can use "),n("a",{attrs:{href:"#multi-line-string"}},[e._v("multi-line string")]),e._v(" to define your note.")]),e._v(" "),n("h3",{attrs:{id:"project-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-notes"}},[e._v("#")]),e._v(" Project Notes")]),e._v(" "),n("pre",[n("code",[e._v("Project DBML {\n  Note: '''\n    # DBML - Database Markup Language\n    DBML (database markup language) is a simple, readable DSL language designed to define database structures.\n\n    ## Benefits\n    \n    * It is simple, flexible and highly human-readable\n    * It is database agnostic, focusing on the essential database structure definition without worrying about the detailed syntaxes of each database\n    * Comes with a free, simple database visualiser at [dbdiagram.io](http://dbdiagram.io)\n  '''\n}\n")])]),e._v(" "),n("h3",{attrs:{id:"table-notes-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-notes-2"}},[e._v("#")]),e._v(" Table Notes")]),e._v(" "),n("pre",[n("code",[e._v("Table users {\n  id int [pk]\n  name varchar\n\n  Note: 'Stores user data'\n}\n")])]),e._v(" "),n("h3",{attrs:{id:"column-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column-notes"}},[e._v("#")]),e._v(" Column Notes")]),e._v(" "),n("p",[e._v("You can add notes to your columns, so you can easily refer to it when hovering over the column in the diagram canvas.")]),e._v(" "),n("pre",[n("code",[e._v("column_name column_type [note: 'replace text here']\n")])]),e._v(" "),n("p",[e._v("Example,")]),e._v(" "),n("pre",[n("code",[e._v("Table orders {\n    status varchar [\n    note: '\n    💸 1 = processing, \n    ✔️ 2 = shipped, \n    ❌ 3 = cancelled,\n    😔 4 = refunded\n    ']\n} \n")])]),e._v(" "),n("h2",{attrs:{id:"multi-line-string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multi-line-string"}},[e._v("#")]),e._v(" Multi-line String")]),e._v(" "),n("p",[e._v("Multiline string will be defined between triple single quote "),n("code",[e._v("'''")])]),e._v(" "),n("pre",[n("code",[e._v("Note: '''\n  This is a block string\n  This string can spans over multiple lines.\n'''\n")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Line breaks: <enter> key")])]),e._v(" "),n("li",[n("p",[e._v("Line continuation: "),n("code",[e._v("\\")]),e._v(" backslash")])]),e._v(" "),n("li",[n("p",[e._v("Escaping characters:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("\\")]),e._v(": using double backslash "),n("code",[e._v("\\\\")])]),e._v(" "),n("li",[n("code",[e._v("'''")]),e._v(": using "),n("code",[e._v("\\'''")])])])]),e._v(" "),n("li",[n("p",[e._v("The number of spaces you use to indent a block string will be the minimum number of leading spaces among all lines. The parser will automatically remove the number of indentation spaces in the final output. The result of the above example will be:")]),e._v(" "),n("pre",[n("code",[e._v("This is a block string\nThis string can spans over multiple lines.\n")])])])]),e._v(" "),n("h2",{attrs:{id:"enum-definition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enum-definition"}},[e._v("#")]),e._v(" Enum Definition")]),e._v(" "),n("p",[n("code",[e._v("Enum")]),e._v(" allows users to define different values of a particular column.\nWhen hovering over the column in the canvas, the enum values will be displayed.")]),e._v(" "),n("pre",[n("code",[e._v("enum job_status {\n    created [note: 'Waiting to be processed']\n    running\n    done\n    failure\n}\n\nTable jobs {\n    id integer\n    status job_status\n} \n")])]),e._v(" "),n("h2",{attrs:{id:"tablegroup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tablegroup"}},[e._v("#")]),e._v(" TableGroup")]),e._v(" "),n("p",[n("code",[e._v("TableGroup")]),e._v(" allows users to group the related or associated tables together.")]),e._v(" "),n("pre",[n("code",[e._v("TableGroup tablegroup_name { // tablegroup is case-insensitive.\n    table1 \n    table2 \n    table3\n}\n\n//example\nTableGroup e-commerce1 {\n    merchants\n    countries\n} \n")])]),e._v(" "),n("h2",{attrs:{id:"syntax-consistency"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax-consistency"}},[e._v("#")]),e._v(" Syntax Consistency")]),e._v(" "),n("p",[e._v("DBML is the standard language for database and the syntax is consistent to provide clear and extensive functions.")]),e._v(" "),n("ul",[n("li",[e._v("curly brackets "),n("code",[e._v("{}")]),e._v(": grouping for indexes, constraints and table definitions")]),e._v(" "),n("li",[e._v("square brackets "),n("code",[e._v("[]")]),e._v(": settings")]),e._v(" "),n("li",[e._v("forward slashes "),n("code",[e._v("//")]),e._v(": comments")]),e._v(" "),n("li",[n("code",[e._v("column_name")]),e._v(" is stated in just plain text")]),e._v(" "),n("li",[e._v("single quote as "),n("code",[e._v("'string'")]),e._v(": string value")]),e._v(" "),n("li",[e._v("double quote as "),n("code",[e._v('"column name"')]),e._v(": quoting variable")]),e._v(" "),n("li",[e._v("triple quote as "),n("code",[e._v("'''multi-line string'''")]),e._v(": multi-line string value")]),e._v(" "),n("li",[e._v("backtick "),n("code",[e._v("`")]),e._v(": function expression")])])])}),[],!1,null,null,null);t.default=i.exports}}]);