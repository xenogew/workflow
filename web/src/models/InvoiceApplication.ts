export class InvoiceApplication {
  constructor(
    // 申請日
    public applicationDate: string,
    // 申請者名
    public applicantName: string,
    // 申請者ID
    public applicantId: string,
    // 主務
    public competent: string,
    // 支払状況
    public paymentStatus: string,
    // 契約番号
    public contractNumber: string,
    // 契約名
    public contractName: string,
    // 締結日
    public conclusionDate: string,
    // 契約期間 yyyymmdd~yyyymmdd
    public contractDurationStart: string,
    public contractDurationEnd: string,
    // 見積番号
    public quotationNumber: string,
    // 部門名１
    public department1: number,
    // 部門名２
    public department2: number,
    // 部門名３
    public department3: number,
    // 部門名４
    public department4: number,
    // 部門名５
    public department5: number,
    // 契約金額
    public contractAmount: number,
    // 作業内容
    public workContent: string,
    // ステータス
    public status: string,
    // 支払い依頼年月日
    public paymentRequestDate: string,
    // 支払い計上月
    public paymentMonth: string,
    // 支払い予定サイト
    public paymentSchedule: string,
    // 支払い予定日
    public paymentScheduleDate: string,
    // 支払い方法
    public paymentMethod: string,
    // 支払い金額（税込み）
    public paymentAmount: number,
    // 作成日時
    public created_at: string,
    public updated_at: string,
  ) {}
}
