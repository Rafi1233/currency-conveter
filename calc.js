var bdtk, dols, eur, indrup, pakrup;

function converter()
{
    bdtk = document.getElementById("pound");
    dols = document.getElementById("dollerU");
    eur = document.getElementById("EURO");
    indrup = document.getElementById("dollerC");
    pakrup = document.getElementById("dollerA");
}

function bdttaka(){
    dols.value = parseFloat(bdtk.value) * 0.012;
    eur.value = parseFloat(bdtk.value) * 0.0097;
    indrup.value = parseFloat(bdtk.value) * 0.86;
    pakrup.value = parseFloat(bdtk.value) * 1.88;
}

function dollerCon()
{
    bdtk.value = parseFloat(dols.value) * 84.67;
    eur.value = parseFloat(dols.value) * 0.82;
    indrup.value = parseFloat(dols.value) * 72.51;
    pakrup.value = parseFloat(dols.value) * 158.97;
}

function euroCon()
{
    bdtk.value = parseFloat(eur.value) * 102.75;
    dols.value = parseFloat(eur.value) * 1.21;
    indrup.value = parseFloat(eur.value) * 87.98;
    pakrup.value = parseFloat(eur.value) * 192.92;
}

function indrupp()
{
    bdtk.value = parseFloat(indrup.value) * 1.17;
    dols.value = parseFloat(indrup.value) * 0.14;
    eur.value = parseFloat(indrup.value) * 0.011;
    pakrup.value = parseFloat(indrup.value) * 2.19;
}

function pakrupp()
{
    bdtk.value = parseFloat(pakrup.value) * 0.53;
    dols.value = parseFloat(pakrup.value) * 0.0063;
    eur.value = parseFloat(pakrup.value) * 0.0052;
    indrup.value = parseFloat(pakrup.value) * 0.46;    
}



converter();