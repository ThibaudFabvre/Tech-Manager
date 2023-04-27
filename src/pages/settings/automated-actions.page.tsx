import { createBranch } from '@api/branches/branches.api';
import { sendMail } from '@api/emails/mails.api';
import { sendNotification } from '@api/notifications/notifications.api';
import { linkTicket, updateTicket } from '@api/tickets/tickets.api';

function ManageTaskTypes() {
  const actionsList: any = [
    {
      name: 'Update task status to In Progress',
      action: () => {
        updateTicket({ status: 'in progress' });
      },
    },
    {
      name: 'Update task status to Done',
      action: () => {
        updateTicket({ status: 'done' });
      },
    },
    {
      name: 'Update task status to Blocked',
      action: () => {
        updateTicket({ status: 'blocked' });
      },
    },
    {
      name: 'Send an email',
      action: () => {
        sendMail();
      },
    },
    {
      name: 'Link task',
      action: () => {
        linkTicket({ id: null });
      },
    },
    {
      name: 'Send a message to Slack',
      action: () => {
        sendNotification({ tool: 'slack' });
      },
    },
    {
      name: 'Create a branch',
      action: () => {
        createBranch();
      },
    },
  ];
  return (
    <div>
      <h3 style={{ marginTop: 60 }}>List of automatic actions</h3>
      <button
        style={{ marginTop: 16 }}
        onClick={() => {
          return null;
        }}
      >
        Add a new action
      </button>
      <ul style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {actionsList.map((action: any) => {
          return (
            <div
              style={{
                backgroundColor: '#efefef',
                borderRadius: 5,
                padding: 8,
                marginTop: 16,
                width: 'fit-content',
              }}
            >
              <li>{action.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ManageTaskTypes;
