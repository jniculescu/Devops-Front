export class Interaction
{
  InvoiceSender: string;
  RecipientName: string;
  RecipientIBAN: string;
  Refrence: string;
  InvoiceNumber: string;
  BIC: string;
  Total: number;
  DueDay: Date;

  constructor(InvoiceSender?: string, RecipientName?: string, RecipientIBAN?: string, Refrence?: string, InvoiceNumber?: string, BIC?: string, Total?: number, DueDay?: Date) {
    this.InvoiceSender = InvoiceSender;
    this.RecipientName = RecipientName;
    this.RecipientIBAN = RecipientIBAN;
    this.Refrence = Refrence;
    this.InvoiceNumber = InvoiceNumber;
    this.BIC = BIC;
    this.Total = Total;
    this.DueDay = DueDay;
  }
}

