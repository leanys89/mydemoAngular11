import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'search_transaction', type: 'link', name: 'Bucar Transacción', icon: 'search' },
  { state: 'gestion_transaction', type: 'link', name: 'Gestionar Transacción', icon: 'credit_card' },
  { state: 'rechazos_diarios', type: 'link', name: 'Rechazos Diarios', icon: 'cancel' },
  { state: 'objeciones_diarias', type: 'link', name: 'Objeciones Diarias', icon: 'pan_tool' },
  { state: 'gestion_cuenta', type: 'link', name: 'Gestiones por Cuenta', icon: 'tab' },
  { state: 'cuadratura', type: 'link', name: 'Cuadratura Transacciones diarias', icon: 'web' },
  {
    state: 'expansion',
    type: 'link',
    name: 'Informe de Compensación',
    icon: 'vertical_align_center'
  },
  { state: 'chips', type: 'link', name: 'Informe de compensación DM', icon: 'vignette' },
  { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Informe CEC 15',
    icon: 'border_horizontal'
  },
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular'
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive'
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
