package com.gazgeek.helloworld.dto;

public class Transaction {
    
    public Transaction() {

    }

     private String microfilm;
     private String tip_prom;
     private double num_cuota_act;
     private String info_add_pago_act;
     private String cod_aut;
     private String cod_prog;
     private String conv;
     private String bin;
     private String lee_banda;
     private String conv_fact;
     private String cod_mone;
     private String rubro;
     private String pto_servicio;
     private String chip;
     private String tokenizada;
     private String sel;
     private int num_tc;
     private String fecha;
     private String fecha_proceso;
     private String comercio;
     private String pais;
     private String origen;
     private double mont_orig ;
     private double monto_fact;
     private double cod_razon;
     private String status;
     private String detalle;
     private double monto;
     private Categoria categoria;


    public Transaction(String microfilm, String tip_prom, double num_cuota_act, String info_add_pago_act, String cod_aut, 
    String cod_prog, String conv, String bin, String lee_banda, String conv_fact, String cod_mone, String rubro, String pto_servicio, 
    String chip, String tokenizada, String sel, int num_tc, String fecha, String fecha_proceso, String comercio, String pais, 
    String origen, double mont_orig, double monto_fact, double cod_razon, String status, String detalle, double monto, Categoria categoria) {
        this.microfilm = microfilm;
        this.tip_prom = tip_prom;
        this.num_cuota_act = num_cuota_act;
        this.info_add_pago_act = info_add_pago_act;
        this.cod_aut = cod_aut;
        this.cod_prog = cod_prog;
        this.conv = conv;
        this.bin = bin;
        this.lee_banda = lee_banda;
        this.conv_fact = conv_fact;
        this.cod_mone = cod_mone;
        this.rubro = rubro;
        this.pto_servicio = pto_servicio;
        this.chip = chip;
        this.tokenizada = tokenizada;
        this.sel = sel;
        this.num_tc = num_tc;
        this.fecha = fecha;
        this.fecha_proceso = fecha_proceso;
        this.comercio = comercio;
        this.pais = pais;
        this.origen = origen;
        this.mont_orig = mont_orig;
        this.monto_fact = monto_fact;
        this.cod_razon = cod_razon;
        this.status = status;
        this.detalle = detalle;
        this.monto = monto;
        this.categoria = categoria;
    }

    public Categoria getCategoria() {
        return this.categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public String getMicrofilm() {
        return this.microfilm;
    }

    public void setMicrofilm(String microfilm) {
        this.microfilm = microfilm;
    }

    public String getTip_prom() {
        return this.tip_prom;
    }

    public void setTip_prom(String tip_prom) {
        this.tip_prom = tip_prom;
    }

    public double getNum_cuota_act() {
        return this.num_cuota_act;
    }

    public void setNum_cuota_act(double num_cuota_act) {
        this.num_cuota_act = num_cuota_act;
    }

    public String getInfo_add_pago_act() {
        return this.info_add_pago_act;
    }

    public void setInfo_add_pago_act(String info_add_pago_act) {
        this.info_add_pago_act = info_add_pago_act;
    }

    public String getCod_aut() {
        return this.cod_aut;
    }

    public void setCod_aut(String cod_aut) {
        this.cod_aut = cod_aut;
    }

    public String getCod_prog() {
        return this.cod_prog;
    }

    public void setCod_prog(String cod_prog) {
        this.cod_prog = cod_prog;
    }

    public String getConv() {
        return this.conv;
    }

    public void setConv(String conv) {
        this.conv = conv;
    }

    public String getBin() {
        return this.bin;
    }

    public void setBin(String bin) {
        this.bin = bin;
    }

    public String getLee_banda() {
        return this.lee_banda;
    }

    public void setLee_banda(String lee_banda) {
        this.lee_banda = lee_banda;
    }

    public String getConv_fact() {
        return this.conv_fact;
    }

    public void setConv_fact(String conv_fact) {
        this.conv_fact = conv_fact;
    }

    public String getCod_mone() {
        return this.cod_mone;
    }

    public void setCod_mone(String cod_mone) {
        this.cod_mone = cod_mone;
    }

    public String getRubro() {
        return this.rubro;
    }

    public void setRubro(String rubro) {
        this.rubro = rubro;
    }

    public String getPto_servicio() {
        return this.pto_servicio;
    }

    public void setPto_servicio(String pto_servicio) {
        this.pto_servicio = pto_servicio;
    }

    public String getChip() {
        return this.chip;
    }

    public void setChip(String chip) {
        this.chip = chip;
    }

    public String getTokenizada() {
        return this.tokenizada;
    }

    public void setTokenizada(String tokenizada) {
        this.tokenizada = tokenizada;
    }

    public String getSel() {
        return this.sel;
    }

    public void setSel(String sel) {
        this.sel = sel;
    }

    public int getNum_tc() {
        return this.num_tc;
    }

    public void setNum_tc(int num_tc) {
        this.num_tc = num_tc;
    }

    public String getFecha() {
        return this.fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getFecha_proceso() {
        return this.fecha_proceso;
    }

    public void setFecha_proceso(String fecha_proceso) {
        this.fecha_proceso = fecha_proceso;
    }

    public String getComercio() {
        return this.comercio;
    }

    public void setComercio(String comercio) {
        this.comercio = comercio;
    }

    public String getPais() {
        return this.pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getOrigen() {
        return this.origen;
    }

    public void setOrigen(String origen) {
        this.origen = origen;
    }

    public double getMont_orig() {
        return this.mont_orig;
    }

    public void setMont_orig(double mont_orig) {
        this.mont_orig = mont_orig;
    }

    public double getMonto_fact() {
        return this.monto_fact;
    }

    public void setMonto_fact(double monto_fact) {
        this.monto_fact = monto_fact;
    }

    public double getCod_razon() {
        return this.cod_razon;
    }

    public void setCod_razon(double cod_razon) {
        this.cod_razon = cod_razon;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDetalle() {
        return this.detalle;
    }

    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }

    public double getMonto() {
        return this.monto;
    }

    public void setMonto(double monto) {
        this.monto = monto;
    }


}