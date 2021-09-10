export class GetRCByIdResponseDTO {
    constructor(
      public id: string,
      public code: string,
      public message: string,
      public insertDate?: Date,
      public updateDate?: Date,
    ) {}
  }