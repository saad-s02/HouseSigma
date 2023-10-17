using WebAPI2.Models;

namespace WebAPI2.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Authenticate(string username, string password);
        void Register(string userName, string password);

        Task<bool> UserAlreadyExists(string userName);

    }
}
