import Moment from 'moment'
import styled from 'styled-components'
import axios from 'axios'


export const addPlant = 'addPlant'
export const addPlantSuccess = 'addPlantSuccess'
export const addPlantFailure = 'addPlantFailure'

export const addPlant = newPlant => dispatch => {
  dispatch({ type: addPlantStart })

  return axios
    .post(//'ADD LINK HERE', newPlant)
    .then(res => {
      dispatch({
        type: addPlantSuccess,
        payload: res.data,
      })

      const notifications = createNewNotifications(
        newPlant.startDate,
        newPlant.interval
      )
      const bulkNotifications = notifications.map(notification => ({
        userId: Number(newPlant.userId),
        plantId: Number(res.data[0].id),
        smsDelivered: false,
        notificationTime: notification,
      }))

      axios
        .post(
          //'ADD LINK HERE',
          bulkNotifications
        )
        .then(notification => console.log(notification))
    })
    .catch(err => {
      dispatch({
        type: addPlantFailure,
        payload: err,
      })
    })
}

function createNewNotifications (startDate, interval) {
  const notifications = []
  for (let i = 0; i < 10; i++) {
    notifications.push(moment(startDate).add(i * interval, 'days'))
  }
  return notifications
}