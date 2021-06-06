export type StatusInfo = {
  status: string | null;
  placeName: string | null;
  placeCode: string | null;
  dateTime: string | null;
};

export type DataInfo = {
  number: number | null;
  itemType: string;
  companyName: string;
  companyNameJP: string;
  statusList: StatusInfo;
  delivered: boolean;
};
