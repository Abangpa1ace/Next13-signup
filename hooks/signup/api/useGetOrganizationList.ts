import { axiosFileInstance } from "@/api/axiosInstance";
import { useQuery } from "react-query";

const fetch = async () => {
  const res = await axiosFileInstance.get('/organization.txt');
  return res;
}

const useGetOrganizationList = () => {
  const { data, ...query } = useQuery(['organization-list'], fetch, {
    staleTime: Infinity,
    select: res => res.data.split('\n'),
  })

  return {
    data,
    ...query,
  }
}

export default useGetOrganizationList;