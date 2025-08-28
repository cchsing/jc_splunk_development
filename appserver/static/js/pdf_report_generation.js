require.config({
    paths: {
        jspdf: "../app/jc_splunk_development/lib/jspdf-3.0.2.umd.min",
        jspdf_autotable: "../app/jc_splunk_development/lib/jspdf.plugin.autotable-5.0.2.min.js"
    },
    shim: {
        jspdf_autotable: {
            deps: ['jspdf']
        }
    }
})
