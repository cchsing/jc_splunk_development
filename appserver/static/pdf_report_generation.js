require.config({
    paths: {
        jspdf: "../app/jc_splunk_development/lib/jspdf-3.0.0.umd.min",
        jspdf_autotable: "../app/jc_splunk_development/lib/jspdf.plugin.autotable-3.8.4.min.js"
    },
    shim: {
        jspdf_autotable: {
            deps: ['jspdf']
        }
    }
})
