require.config({
    paths: {
        jspdf: "../app/jc_splunk_development/lib/jspdf.umd.min",
        jspdf_autotable: "../app/jc_splunk_development/lib/jspdf.plugin.autotable.min"
    },
    shim: {
        jspdf_autotable: {
            deps: ['jspdf']
        }
    }
})
