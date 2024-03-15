export default class DateFormatter {
    fillZero = (date: number) => {
      return date.toString().padStart(2, '0');
    }

    formatDate = (date: string | Date) => {
      const _date = new Date(date);
      const _day = this.fillZero(_date.getDate());
      const _month = this.fillZero(_date.getMonth() + 1);
      return `${_date.getFullYear()}-${_month}-${_day}`;
    }
}
