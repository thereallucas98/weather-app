import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatTimestampToHour(timestamp: number) {
  const date = new Date(timestamp * 1000);

  const formatHour = format(date, "HH:mm'h'", {
    locale: ptBR
  });

  return formatHour;
}