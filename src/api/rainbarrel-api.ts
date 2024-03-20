const API_URL = "http://localhost:8080";

export type IrrigationSystemStatus = {
  pump_is_on: boolean;
  total_capacity_litres: number;
  current_volume_litres: number;
  percent_full: number;
};

export const getIrrigationSystemStatus =
  async (): Promise<IrrigationSystemStatus> => {
    const response = await fetch(`${API_URL}/status`);
    const status = await response.json();
    return status;
  };

export const turnPumpOn = async (): Promise<IrrigationSystemStatus> => {
  const response = await fetch(`${API_URL}/turn_pump_on`, {
    method: "POST",
  });
  const status = await response.json();
  return status;
};

export const turnPumpOff = async (): Promise<IrrigationSystemStatus> => {
  const response = await fetch(`${API_URL}/turn_pump_off`, {
    method: "POST",
  });
  const status = await response.json();
  return status;
};

export const togglePump = async (): Promise<IrrigationSystemStatus> => {
  const response = await fetch(`${API_URL}/toggle_pump`, {
    method: "POST",
  });
  const status = await response.json();
  return status;
};
