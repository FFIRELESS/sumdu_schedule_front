import { apiClient } from '../../config/axios'
import { config } from '../../config/app.config'

export const getScheduleAxios = async (): Promise<any> =>
// eslint-disable-next-line  @typescript-eslint/restrict-template-expressions
  await apiClient.get(`${config.proxyURL}${config.apiURL}?method=getSchedules&id_grp=1002071&id_fio=0&id_aud=0&date_beg=29.11.2022&date_end=01.12.2022`,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })

export const getSchedule = async (group: number, dateStart?: string, dateEnd?: string): Promise<any> =>
// eslint-disable-next-line  @typescript-eslint/restrict-template-expressions
  await fetch(`${config.proxyURL}${config.apiURL}?method=getSchedules&id_grp=${group}&id_fio=0&id_aud=0&date_beg=${dateStart}&date_end=${dateEnd}`
  ).then(async (data) => await data.clone().json())
