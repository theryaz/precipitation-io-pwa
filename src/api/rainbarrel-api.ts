const API_URL = "https://hq.v-eden.com";
// const API_URL = "http://localhost:8080";

export const isAuthed = (): boolean => {
  return getApiKey() !== null;
};

export const setApiKey = (api_key: string) => {
  if (typeof localStorage === "undefined") {
    return;
  }
  localStorage.setItem("API_KEY", api_key);
};

const getApiKey = (): string | null => {
  if (typeof localStorage === "undefined") {
    return null;
  }
  return localStorage.getItem("API_KEY") || null;
};

const getHeaders = () => {
  return {
    Authorization: getApiKey() || "1234",
  };
};

export type IrrigationSystemStatus = {
  pump_is_on: boolean;
  total_capacity_litres: number;
  current_volume_litres: number;
  percent_full: number;
};

export const getIrrigationSystemStatus =
  async (): Promise<IrrigationSystemStatus> => {
    const response = await fetch(`${API_URL}/status`, {
      headers: getHeaders(),
    });
    const status = await response.json();
    return status;
  };

export const turnPumpOn = async (): Promise<IrrigationSystemStatus> => {
  const response = await fetch(`${API_URL}/turn_pump_on`, {
    method: "POST",
    headers: getHeaders(),
  });
  const status = await response.json();
  return status;
};

export const turnPumpOff = async (): Promise<IrrigationSystemStatus> => {
  const response = await fetch(`${API_URL}/turn_pump_off`, {
    method: "POST",
    headers: getHeaders(),
  });
  const status = await response.json();
  return status;
};

export const togglePump = async (): Promise<IrrigationSystemStatus> => {
  const response = await fetch(`${API_URL}/toggle_pump`, {
    method: "POST",
    headers: getHeaders(),
  });
  const status = await response.json();
  return status;
};
