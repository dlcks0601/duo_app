import { NicknameUpdateResponse } from '@/types/auth.type';
import fetcher from '@/utils/fetcher';

export const setNickname = async (
  nickname: string
): Promise<NicknameUpdateResponse> => {
  const response = await fetcher<NicknameUpdateResponse>({
    url: '/user/nickname',
    method: 'POST',
    data: {
      nickname,
    },
  });
  return response.data;
};
