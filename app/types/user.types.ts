export interface RequestLoginParams {
  account?: string;
  code?: string | number;
  password?: string;
  invite_code?: string;
  type?: string;
  qrcode_id?: string;
  phone?: string;
  isPassCode?: boolean;
}

export interface UserInfo {
  id: string;
  account: string;
  nickname: string;
  avatar: string;
  role: string;
  integral: number;
  vip_expire_time: string;
  svip_expire_time: string;
  ip: string;
  status: number;
  invite_code: string;
  superior_id?: string;
  user_agent?: string;
  today_invite_count?: number;
  current_amount?: number;
  subordinate_today_pay_amount?: number;
  all_commission_amount?: number;
  create_time: string;
  update_time: string;
  is_signin: number;
  nick: string;
  phone: string;
  email: string;
  qqid: null | string;
  wxid: null | string;
  qq_nick: null | string;
  wx_nick: null | string;
  vipTime: null | string;
  access_token: null | string;
  vipType: string;
  last_login_ip: string;
  last_login_time: string | number;
  myTeamer: string | number;
  is_team_member: number;
  cash_money: number;
  invitation_money: number;
  money: number;
  inv_pay_num: number;
  invitation_num: number;
  higher: null | string;
  teamer: number;
  distributor: number;
  enable: number;
  token: string;
  vip: number;
}

export interface ResponseLoginData {
  user_info: UserInfo;
  token?: string;
}
export type ActionType = {
  refresh: (resetErrorCount?: boolean) => void;
  status: Status;
};
export declare enum Status {
  Default = 1,
  Loading = 2,
  Moving = 3,
  Verify = 4,
  Success = 5,
  Error = 6,
}
