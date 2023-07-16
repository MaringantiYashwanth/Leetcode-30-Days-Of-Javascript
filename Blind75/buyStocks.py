class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        '''this is almost correct solution but for larger
        testcases we are getting time limit exceeded'''
        # maxPft = 0
        # for i in range(len(prices)):
            # for j in range(i + 1, len(prices)):
                # diff = prices[j] - prices[i]
                # if maxPft < diff and prices[i] < prices[j]:
                    # maxPft = diff
        # return maxPft
        left, right = 0, 1 # left = buy. right = sell
        maximum_profit = 0
        
        while (right < len(prices)):
            # profitable?
            if prices[left] < prices[right]:
                profit = prices[right] - prices[left]
                maximum_profit = max(maximum_profit, profit)
            else:
                left = right
            right += 1
        return maximum_profit
            


s = Solution()
print(s.maxProfit([7, 1, 5, 6, 3, 4]))
print(s.maxProfit([7,6,4,3,1]))
print(s.maxProfit([0, 0, 0, 0, 0]))
print(s.maxProfit([1, 3, 7, 6, 5, 4]))
print(s.maxProfit([8, 1, 5, 2, 3, 4]))