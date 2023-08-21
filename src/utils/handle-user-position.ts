import { IUser, IUserPosition } from "../interfaces/user";

export const handleUserPositionData = (
  currUser: IUser | null,
  positionsList: IUserPosition[]
) => {
  if (currUser && currUser.position.length > 0) {
    currUser.position.forEach((item) => {
      const index = positionsList.findIndex(
        (element: IUserPosition) => element.name === item
      );

      positionsList[index].checked = true;
    });

    return positionsList;
  }

  return positionsList;
};
