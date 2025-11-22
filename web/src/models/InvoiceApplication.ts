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
    // 手数料負担者
    public feeBearer: string,
    // 契約番号
    public contractNumber: string,
    // 契約名
    public contractSubject: string,
    // 契約金額
    public contractAmount: number,
    // 締結日
    public conclusionDate: string,
    // 契約期間 yyyymmdd~yyyymmdd
    public contractDurationStart: string,
    public contractDurationEnd: string,
    // 見積番号
    public quotationNumber: string,
    // 作業内容
    public workContent: string,
    // ステータス
    public status: string,
    // 支払先名
    public payeeName: string,
    // 支払依頼番号
    public payeeCode: string,
    // 支払状況
    public paymentStatus: string,
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
    // payVat
    public paymentVat: string,
    // 税金形式
    public paymentVatFormat: string,
    // frequency
    // payTaxExempt
    // payTaxExcluded
    // payTaxIncluded
    // totalAmount
    // 備考
    public remarks: string,

    // プロジェクト名1
    public projectName1: string,
    // プロジェクト名2
    public projectName2: string,
    // プロジェクト名3
    public projectName3: string,
    // プロジェクト名4
    public projectName4: string,
    // プロジェクト名5
    public projectName5: string,
    // プロジェクトコード1
    public projectCode1: string,
    // プロジェクトコード2
    public projectCode2: string,
    // プロジェクトコード3
    public projectCode3: string,
    // プロジェクトコード4
    public projectCode4: string,
    // プロジェクトコード5
    public projectCode5: string,
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
    // category1
    // category2
    // category3
    // category4
    // categorys
    // contractForm1
    // contractForm2
    // contractForm3
    // contractForm4
    // contractForm5
    // engineerName1
    // engineerName2
    // engineerName3
    // engineerName4
    // engineerName5
    // payRate1
    // payRate2
    // payRate3
    // payRate4
    // payRate5
    // payTaxExcluded1
    // payTaxExcluded2
    // payTaxExcluded3
    // payTaxExcluded4
    // payTaxExcluded5
    // payTaxExempt1
    // payTaxExempt2
    // payTaxExempt3
    // payTaxExempt4
    // payTaxExempt5
    // remarks1
    // remarks2
    // remarks3
    // remarks4
    // remarks5

    // format
    // calFlag
    // debitSide1
    // debitCode1
    // debitSub1
    // debitSubCode1
    // creditSide1
    // creditCode1
    // creditSub1
    // creditSubCode1
    // debitSide2
    // debitCode2
    // debitSub2
    // debitSubCode2
    // creditCode2
    // creditSide2
    // creditSub2
    // creditSubCode2
    // debitSide3
    // debitCode3
    // debitSub3
    // debitSubCode3
    // creditSide3
    // creditCode3
    // creditSub3
    // creditSubCode3
    // debitSide4
    // debitCode4
    // debitSub4
    // debitSubCode4
    // creditSide4
    // creditCode4
    // creditSub4
    // creditSubCode4
    // debitSide5
    // debitCode5
    // debitSub5
    // debitSubCode5
    // creditSide5
    // creditCode5
    // creditSub5
    // creditSubCode5
    // sdPaySight
    // sdPayDate
    // sdPayTaxIncluded
    // ratioFlag
  ) {}
}
