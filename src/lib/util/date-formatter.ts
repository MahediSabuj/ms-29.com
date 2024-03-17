export default function DateFormatter() {
    const fillZero = (date: number) => {
      return date.toString().padStart(2, '0');
    }

    const formatDate = (date: string | Date) => {
      const _date = new Date(date);
      const _day = fillZero(_date.getDate());
      const _month = fillZero(_date.getMonth() + 1);
      return `${_date.getFullYear()}-${_month}-${_day}`;
    }

    return {
      formatDate
    };
}
