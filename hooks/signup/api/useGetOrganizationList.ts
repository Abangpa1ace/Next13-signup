import { axiosFileInstance } from "@/api/axios";
import { useQuery } from "react-query";

const fetch = async () => {
  return await axiosFileInstance.get<string>('/organization.txt');
}

const useGetOrganizationList = () => {
  const { data, ...query } = useQuery(['organization-list'], fetch, {
    staleTime: Infinity,
    select: res => res?.data?.split('\n'),
  })

  return {
    data: data || [],
    ...query,
  }
}

export default useGetOrganizationList;