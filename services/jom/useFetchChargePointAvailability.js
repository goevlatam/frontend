import { useMemo } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARGER_AVAILABLE = gql`
  query GetChargePointAvailibility(
    $id: ObjectID!
    $from: DateTime!
    $to: DateTime!
  ) {
    chargePointAvailibility(id: $id, from: $from, to: $to) {
      time
      duration
      txnHash
      activatedTime
      userAddress
    }
  }
`;

const useFetchChargePointAvailability = (chargePointId, from, to) => {
    const { loading, error, data, refetch } = useQuery(GET_CHARGER_AVAILABLE, {
        variables: {
            id: chargePointId,
            from,
            to
        },
    });
    console.log('availability: ', data)
    const formattedData = useMemo(() => data?.chargePoint, [data]);
    return {loading, error, data: formattedData, refetch}
}

export default useFetchChargePointAvailability