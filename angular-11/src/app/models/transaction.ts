export interface Transaction {
    microfilm:string;
    tip_prom:string;
    num_cuota_act:number;
    info_add_pago_act:string;
    cod_aut:string;
    cod_prog:string;
    conv:string;
    bin:string;
    lee_banda:string;
    conv_fact:string;
    cod_mone:string;
    rubro:string;
    pto_servicio:string;
    chip:string;
    tokenizada:string;
    sel:string;
    num_tc: string;
    fecha: string;
    fecha_proceso:string;
    comercio: string;
    pais: string;
    origen:string;
    mont_orig:number;
    monto_fact:number;
    cod_razon:number;
    status:string;
    detalle:string;
    monto:number;
  }
  
  export const TRANSACTION_LIST: Transaction[] = [
    {microfilm:'asds',tip_prom:'ffdf', num_cuota_act:345.67, info_add_pago_act:'fgdfdfgfdg',
    cod_aut:'32sdw32', cod_prog:'sffsf', conv:'fdfd', bin:'dfsd234dfs', lee_banda:'fgfgdfwe',conv_fact:'fddg',cod_mone:'euro',
    rubro:'fcdfdf',pto_servicio:'nbngfhg', chip:'Si', tokenizada:'Si', sel:'',
    num_tc: '1',fecha:'16/04/2021', fecha_proceso:'16/04/2021', comercio: 'Movistar', pais: 'CHL', origen:'asdsad',
    mont_orig: 1236.23, monto_fact:1545.3, cod_razon:4562, status:'Pendiente',detalle:'', monto: 23.6},
    {microfilm:'asds',tip_prom:'ffdf', num_cuota_act:345.67, info_add_pago_act:'fgdfdfgfdg',
    cod_aut:'32sdw32', cod_prog:'sffsf', conv:'fdfd', bin:'dfsd234dfs', lee_banda:'fgfgdfwe',conv_fact:'fddg',cod_mone:'euro',
    rubro:'fcdfdf',pto_servicio:'nbngfhg', chip:'Si', tokenizada:'Si', sel:'',
    num_tc: '2',fecha:'16/04/2021',  fecha_proceso:'16/04/2021', comercio: 'Movistar', pais: 'CHL', origen:'asdsad',
    mont_orig: 1236.23, monto_fact:1545.3, cod_razon:4563, status:'Pendiente',detalle:'', monto: 1223.6},
    {microfilm:'asds',tip_prom:'ffdf', num_cuota_act:345.67, info_add_pago_act:'fgdfdfgfdg',
    cod_aut:'32sdw32', cod_prog:'sffsf', conv:'fdfd', bin:'dfsd234dfs', lee_banda:'fgfgdfwe',conv_fact:'fddg',cod_mone:'euro',
    rubro:'fcdfdf',pto_servicio:'nbngfhg', chip:'Si', tokenizada:'Si', sel:'',
    num_tc: '3',fecha:'16/04/2021',  fecha_proceso:'16/04/2021', comercio: 'Movistar', pais: 'CHL', origen:'asdsad',
    mont_orig: 1236.23, monto_fact:1545.3, cod_razon:4562, status:'Pendiente',detalle:'', monto: 523.6}
  ];