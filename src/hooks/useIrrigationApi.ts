import {
  IrrigationSystemStatus,
  getIrrigationSystemStatus,
  turnPumpOff,
  turnPumpOn,
} from "@/api/rainbarrel-api";
import { useEffect, useState } from "react";

export const useIrrigationApi = () => {
  const fetchStatus = async () => {
    const status = await getIrrigationSystemStatus();
    updateStatus(status);
  };
  const [status, updateStatus] = useState<IrrigationSystemStatus>({
    pump_is_on: false,
    total_capacity_litres: 0,
    current_volume_litres: 0,
    percent_full: 0,
  });
  const togglePump = async () => {
    if (status.pump_is_on) {
      updateStatus(await turnPumpOff());
    } else {
      updateStatus(await turnPumpOn());
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return { status, togglePump };
};
