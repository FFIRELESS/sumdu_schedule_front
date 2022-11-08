import { apiClient } from '../../config/axios'
import { config } from '../../config/app.config'

export const getSchedule = async (): Promise<any> =>
// eslint-disable-next-line  @typescript-eslint/restrict-template-expressions
  await apiClient.get(`${config.proxyURL}${config.apiURL}?method=getSchedules&id_grp=1002071&id_fio=0&id_aud=0&date_beg=29.11.2022&date_end=01.12.2022`,
    {
      headers: {
        // 'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE,OPTIONS',
        // 'Access-Control-Allow-Headers': 'Authorization, Lang',
        'Content-Type': 'application/json'
      }
    })

export const getScheduleJS = async (): Promise<any> =>
// eslint-disable-next-line  @typescript-eslint/restrict-template-expressions
  await fetch(`${config.proxyURL}${config.apiURL}?method=getSchedules&id_grp=1002071&id_fio=0&id_aud=0&date_beg=08.11.2022&date_end=09.11.2022`
  ).then(async (data) => await data.clone().json())
