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

  // Auto-refresh status every 10 seconds. If the pump is running, then every 1 second.
  const [intervalRef, setIntervalRef] = useState<NodeJS.Timer | null>(null);
  useEffect(() => {
    if (intervalRef) {
      clearInterval(intervalRef);
    }
    if (status.pump_is_on) {
      setIntervalRef(
        setInterval(() => {
          fetchStatus();
        }, 1000)
      );
    } else if (!status.pump_is_on) {
      setIntervalRef(
        setInterval(() => {
          fetchStatus();
        }, 10000)
      );
    }
  }, [status.pump_is_on]);

  return { status, togglePump };
};
